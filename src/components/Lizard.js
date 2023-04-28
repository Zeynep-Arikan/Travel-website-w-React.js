import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./Lizard.css";

export default function MultiActionAreaCard() {
  return (
    <div className="cards-container">
      <Card >
        <div className="cards">
          <div className="card-examples" id="one">
            <CardActionArea className="card-one">
              <CardMedia
                className="image-one"
                component="img"
                height="140"
                image="https://images.pexels.com/photos/16121004/pexels-photo-16121004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Küba
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We are looking for help with kids in schools , basically young
                  children (4-12 years ), teach them your culture and English
                  also play with them . Volunteers will also help in daily
                  household activities like cooking with mom and helping in
                  kitchen .
                </Typography>
              </CardContent>
              <div className="btn">
                <CardActions>
                  <Button className="btn-detaylar">Detaylar</Button>
                </CardActions>
              </div>
            </CardActionArea>
          </div>

          <div className="card-examples">
            <CardActionArea className="card-two">
              <CardMedia
                className="canada"
                component="img"
                height="140"
                image="https://images.pexels.com/photos/5023730/pexels-photo-5023730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="cuba"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Kanada
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We basically need help building and doing some housework
                  companionship would be nice too Prepare cleared land beside
                  house for gardening We planning a vegetable garden our first
                  so we all gonna learn together
                </Typography>
              </CardContent>
              <div className="btn">
                <CardActions>
                  <Button className="btn-detaylar">Detaylar</Button>
                </CardActions>
              </div>
            </CardActionArea>
          </div>

          <div className="card-examples">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.pexels.com/photos/6210528/pexels-photo-6210528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="yoga"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sri Lanka
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Volunteering here is great fun for everyone, no experience is
                  required, just a heart that wants to share! ​
                </Typography>
              </CardContent>
              <div className="btn">
                <CardActions>
                  <Button className="btn-detaylar">Detaylar</Button>
                </CardActions>
              </div>
            </CardActionArea>
          </div>
        </div>
      </Card>
    </div>
  );
}
