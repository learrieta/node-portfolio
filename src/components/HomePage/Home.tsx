
import Data from "./Data";
import { Social } from "./Social";
import './home.css'
import {  useState, useEffect } from 'react'
import { Info as InfoModel } from '../../models/info'
import * as InfoApi from '../Network/data_api'
import { Link } from "react-router-dom";

const Home = () => {
  const [infos, setInfo] = useState<InfoModel[]>([]);

  useEffect(() =>{
      async function loadInfo() {
        try {
          const info = await InfoApi.fetchNotes();
          setInfo(info);
        } catch (error){
          console.error(error);
        }
  
      }
      loadInfo();
    }, []);
  return (
    <section className="home section" id="home">
        <div className="home__container  container grid">
          <div className="home__content grid">
              <Social />

              <Link to='/awesome/applicant' className="home__img"></Link>

              <div>
                {infos.map(items => (
                    <Data items = {items} key={items.id} />
                ))}
              </div>
          </div>

          
          
        </div>
    </section>
  )
}

export default Home;