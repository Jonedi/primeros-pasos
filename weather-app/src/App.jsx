import { Box, Container, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";

const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&lang=es&q=`

export default function App() {

  const [ city, setCity ] = useState("")
  const [ error, setError ] = useState({
    error: false,
    message: ""
  })
  const [ loading, setLoading ] = useState(false)
  const [weather, setWeather ] = useState({
    city: "",
    country: "",
    temp: "",
    condition: "",
    icon: "",
    coditionText: ""
  })

  const onSubmit = async(e) => {
    e.preventDefault();
    setLoading(true)
    setError({
      error: false,
      message: ""
    })
    try {
      if (!city.trim()) throw { message: "El campo ciudad es obligatorio" }

      const res = await fetch(`${API_WEATHER}${city}`)
      const data = await res.json()

      if (data.error) throw { message: data.error.message }
      setWeather({
        city: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        condition: data.current.condition.code,
        icon: data.current.condition.icon,
        coditionText: data.current.condition.text
      })

    } catch (error) {
      setError({
        error: true,
        message: error.message
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container
      maxWidth="sm"
      sx={{mt:2}}
    >
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
      >
        Weather App
      </Typography>
      <Box
        sx={{display: "grid", gap:2}}
        component="form"
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          id="City"
          label="Ciudad"
          variant="outlined"
          size="small"
          required
          fullWidth
          value={city}
          onChange={e => setCity(e.target.value)}
          error={error.error}
          helperText={error.message}
        />

        <LoadingButton
          type="submit"
          variant="contained"
          loading={loading}
          loadingIndicator="Buscando Ciudad ... "
        >
          Buscar
        </LoadingButton>
      </Box>

      {weather.city && (
        <Box
          sx={{ mt:2, display:"grid", gap:2, textAlign:"center" }}
        >
          <Typography variant="h4" component="h2">
            {weather.city}, {weather.country}
          </Typography>
          <Box
            component="img"
            alt={weather.coditionText}
            src={weather.icon}
            sx={{margin: "0 auto"}}
          />
          <Typography variant="h5" component="h3">
            {weather.temp} °C
          </Typography>
          <Typography variant="h6" component="h4">
            {weather.coditionText}
          </Typography>
        </Box>
      )}

      <Typography
        textAlign="center"
        sx={{ mt:2, fontSize: "10px" }}
      >
        Power by: {" "}
        <a
          href="https://www.weatherapi.com"
          title="Weather API"
        >
          WeatherApi.com
        </a>
      </Typography>
    </Container>
  )
}