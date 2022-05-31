import React from 'react'
import { motion } from 'framer-motion'
import Pokeball from '../../assets/unnamed.png'

export default function PokemonCard(props) {

  const redirectWithKey = () => {
    window.location.replace('/detail')
  };


  return (
    <motion.div className="card mb-4 shadow-sm col-3 m-4" whileHover={{scale: 1.03}}>
        <img className="card-img-top" alt="Thumbnail [100%x225]" src={Pokeball} data-holder-rendered="true" style={{height: '235px'}}></img>
        <div className="card-body">
          <p className="card-text">{props.pkm.name}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary"  onClick={redirectWithKey}>View</button>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
    </motion.div>
  )
}
