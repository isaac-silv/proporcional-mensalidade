'use client'
import { useEffect, useState } from "react";
import { Box, Button, Divider, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import { calc } from "./script";
import { Replay } from "@mui/icons-material";

export default function Home() {

  const [ valor, setValor ] = useState(null);
  const [ day, setDay ] = useState(0);

  const [ valor2, setValor2 ] = useState(null);
  const [ day2, setDay2 ] = useState(0);

  const [ result, setResult ] = useState('00');

  const handleReset = () => {
    setValor(null)
    setDay(0);
    setValor2(null);
    setDay2(0);
  }

  useEffect(() => {
    const calcResult = calc(valor, day, valor2, day2);
    setResult(calcResult);    
  }, [valor, day, valor2, day2])

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='94vh'
      padding={2}
    >
      <Box 
        component={Paper}
        padding={4}
      >
        <Stack alignItems='center' pb={4}>
          <img src="marca-png.png" width='300px'/>
          <Typography variant="h6" fontWeight={600}>CALCULADORA PROPORCIONAL</Typography>
        </Stack>
        <Divider />
        <Stack
          flexDirection='row'
          gap={2}
          pt={4}s
        >
          <TextField 
            label='Informe o valor'
            type="number"
            size="small"
            value={valor ? valor : ''} 
            onChange={(e) => setValor(e.target.value)}
          />
          <TextField 
            label='Dias'
            type="number"
            size="small"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            sx={{
              width: 80
            }}
          />
        </Stack>      
        <Stack
          flexDirection='row'
          gap={2}
          pt={4}
          pb={4}
        >
          <TextField 
            label='Informe o valor'
            type="number"
            size="small"
            value={valor2 ? valor2 : ''}
            onChange={(e) => setValor2(e.target.value)}
          />
          <TextField 
            label='Dias'
            type="number"
            size="small"
            value={day2}
            onChange={(e) => setDay2(e.target.value)}
            sx={{
              width: 80
            }}
          />
        </Stack>  
        <Divider />
        <Stack
          flexDirection='row'
          alignItems='center'
          justifyContent='center'
          gap={2}
          pt={4}
        >
          <Typography 
            variant="h3" 
            fontWeight={600} 
            color='#6adb6a'
          >
            {'R$ ' + Number(result).toFixed(2)}
          </Typography>
          <IconButton onClick={handleReset}>
            <Replay />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}
