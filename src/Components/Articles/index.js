import {data} from '../../articles/articles'
import { Link } from 'react-router-dom'
import './index.scss'
import { encodeURL } from '../../utils/url'
import { Grid, Col, Row } from 'rsuite'
import ClampLines from 'react-clamp-lines';

const Articles = () => {
  return (
    <div className="articles-list">
      {data.map((el) => {
        return (
          <div className='article-card'>
            <Grid fluid>
              <Col xs={14}>
                <div className='left'>
                  <Row><span className='title'>{el.title}</span></Row>
                  <Row><ClampLines text={el.content[0]} lines={3} buttons={false}></ClampLines></Row>
                  <Row className='footer'><span className='date'>{el.date}</span><Link to={encodeURL(el.title)}>Читать</Link></Row>
                </div>
              </Col>
              <Col xs={10}>
                <img src={`/img/${el.main_picture}`} alt=''></img>
              </Col>
            </Grid>
          </div>
        )
      })}
    </div>
  )
}

export default Articles