import "./infoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    const initial_URL = "https://images.unsplash.com/photo-1561553873-e8491a564fd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const HOT_URL="https://images.unsplash.com/photo-1563761141-38f17aad6d44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHN1bnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://media.istockphoto.com/id/2223221949/photo/in-blue-raincoat-a-little-boy-happytime-under-rain-with-transparent-umbrella.jpg?s=2048x2048&w=is&k=20&c=cuKXtsUPcqs2emwZy8-blqEUuQJRtGJ99vfqYXjBi30=";


    return(
        <div className="InfoBox">
          <div className="cardContainer">
          <Card sx={{ maxWidth: 345 }} >
            <CardMedia
            sx={{ height: 140 }}
            image= {
             info.humidity > 80 
             ? RAIN_URL
             : info.temp > 15 
             ? HOT_URL 
             : COLD_URL
            }
            title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {info.city} {
                info.humidity>80 
                ? <ThunderstormIcon/> 
                : info.temp > 15 
                ? <SunnyIcon/> 
                : <AcUnitIcon/>
                }
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                <p>Temperature ={info.temp}&deg;C</p>
                <p>Humidity ={info.humidity}</p>
                <p>Min Temp ={info.tempMin}</p>
                <p>Max Temp ={info.tempMax}</p>
                <p>The weather can be described as <i>{info.weather}</i>  and feels like {info.feelLike}</p>
            </Typography>
            </CardContent>
          </Card>
          </div>
        </div>
    );
}