import Box from "@mui/material/Box";
import MainLayout from "./layouts/MainLayout";
import { StatCard } from "./components/Cards";
import { stats } from "./data/MockData";

function App(){
  return(
    <MainLayout>
      <Box sx={{
        display:'grid',
        gridTemplateColumns:{
          xs:'1fr',
          sm:'repeat(2,1fr)',
          md:'repeat(4,1fr)',
        },
        gap:3,
      }}>

      {stats.map((s) => (
        <StatCard key={s.id} label={s.name} value = {s.value} />
      ))
      }
      </Box>
    </MainLayout>
  )
}

export default App;
