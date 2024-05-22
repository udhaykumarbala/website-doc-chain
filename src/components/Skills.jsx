import Slider from 'react-slick';
import antd from '../assets/skill/antd.png'
import aws from '../assets/skill/aws.png'
import babel from '../assets/skill/babel.png'
import bootstrap from '../assets/skill/bootstrap.png'
import cassandra from '../assets/skill/cassandra.png'
import cloudflare from '../assets/skill/cloudflare.png'
import css from '../assets/skill/css.png'
import dart from '../assets/skill/dart.png'
import digitalocean from '../assets/skill/digitalocean.png'
import django from '../assets/skill/django.png'
import docker from '../assets/skill/docker.png'
import elastic from '../assets/skill/elastic.png'
import firebase from '../assets/skill/firebase.png'
import flask from '../assets/skill/flask.png'
import flutter from '../assets/skill/flutter.png'
// gcp,git,go,grafana,html,jquery,kubernetes,mongo,mysql,nest,next,node,openai,php,postgresal,python,qwik,react,redis,redux,solidity,supabase,svelte,swagger,tailwind,threejs,vue
import gcp from '../assets/skill/gcp.png'
import git from '../assets/skill/git.png'
import go from '../assets/skill/go.png'
import grafana from '../assets/skill/grafana.png'
import html from '../assets/skill/html.png'
import jquery from '../assets/skill/jquery.png'
import kubernetes from '../assets/skill/kubernetes.png'
import mongo from '../assets/skill/mongo.png'
import mysql from '../assets/skill/mysql.png'
import nest from '../assets/skill/nest.png'
import next from '../assets/skill/next.png'
import node from '../assets/skill/node.png'
import openai from '../assets/skill/openai.png'
import php from '../assets/skill/php.png'
import postgresql from '../assets/skill/postgresql.png'
import python from '../assets/skill/python.png'
import qwik from '../assets/skill/qwik.png'
import react from '../assets/skill/react.png'
import redis from '../assets/skill/redis.png'
import redux from '../assets/skill/redux.png'
import solidity from '../assets/skill/solidity.png'
import supabase from '../assets/skill/supabase.png'
import svelte from '../assets/skill/svelte.png'
import swagger from '../assets/skill/swagger.png'
import tailwind from '../assets/skill/tailwind.png'
import threejs from '../assets/skill/threejs.png'
import vue from '../assets/skill/vue.png'


const Skills = () => {
    const settings = {
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 2000,
      cssEase: 'linear',
      infinite: true,
      variableWidth: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    const settings2 = {
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 2000,
      cssEase: 'linear',
      infinite: true,
      variableWidth: true,
      arrows: false,
      rtl: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <>
        <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
          <Slider {...settings}>
            <div className='px-12'><img src={antd} alt="Tech Logo 1" className="w-full h-auto" /></div>
            <div className='px-12'><img src={aws} alt="Tech Logo 2" className="w-full h-auto" /></div>
            <div className='px-12'><img src={babel} alt="Tech Logo 3" className="w-full h-auto" /></div>
            <div className='px-12'><img src={bootstrap} alt="Tech Logo 4" className="w-full h-auto" /></div>
            <div className='px-12'><img src={cassandra} alt="Tech Logo 5" className="w-full h-auto" /></div>
            <div className='px-12'><img src={cloudflare} alt="Tech Logo 6" className="w-full h-auto" /></div>
            <div className='px-12'><img src={jquery} alt="Tech Logo 7" className="w-full h-auto" /></div>
            <div className='px-12'><img src={css} alt="Tech Logo 8" className="w-full h-auto" /></div>
            <div className='px-12'><img src={gcp} alt="Tech Logo 9" className="w-full h-auto" /></div>
            <div className='px-12'><img src={git} alt="Tech Logo 10" className="w-full h-auto" /></div>
            <div className='px-12'><img src={go} alt="Tech Logo 11" className="w-full h-auto" /></div>
            <div className='px-12'><img src={grafana} alt="Tech Logo 12" className="w-full h-auto" /></div>
            <div className='px-12'><img src={html} alt="Tech Logo 13" className="w-full h-auto" /></div>
            <div className='px-12'><img src={supabase} alt="Tech Logo 14" className="w-full h-auto" /></div>
            <div className='px-12'><img src={svelte} alt="Tech Logo 15" className="w-full h-auto" /></div>
            <div className='px-12'><img src={swagger} alt="Tech Logo 16" className="w-full h-auto" /></div>
            <div className='px-12'><img src={redux} alt="Tech Logo 17" className="w-full h-auto" /></div>
            <div className='px-12'><img src={solidity} alt="Tech Logo 18" className="w-full h-auto" /></div>
            <div className='px-12'><img src={tailwind} alt="Tech Logo 19" className="w-full h-auto" /></div>
            <div className='px-12'><img src={threejs} alt="Tech Logo 20" className="w-full h-auto" /></div>
            <div className='px-12'><img src={vue} alt="Tech Logo 21" className="w-full h-auto" /></div>
          </Slider>
        </section>
        <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
          <Slider {...settings2}>
            <div className='px-12'><img src={dart} alt="Tech Logo 22" className="w-full h-auto" /></div>
            <div className='px-12'><img src={digitalocean} alt="Tech Logo 23" className="w-full h-auto" /></div>
            <div className='px-12'><img src={docker} alt="Tech Logo 24" className="w-full h-auto" /></div>
            <div className='px-12'><img src={django} alt="Tech Logo 25" className="w-full h-auto" /></div>
            <div className='px-12'><img src={elastic} alt="Tech Logo 26" className="w-full h-auto" /></div>
            <div className='px-12'><img src={firebase} alt="Tech Logo 27" className="w-full h-auto" /></div>
            <div className='px-12'><img src={flask} alt="Tech Logo 28" className="w-full h-auto" /></div>
            <div className='px-12'><img src={flutter} alt="Tech Logo 29" className="w-full h-auto" /></div>
            <div className='px-12'><img src={kubernetes} alt="Tech Logo 30" className="w-full h-auto" /></div>
            <div className='px-12'><img src={mongo} alt="Tech Logo 31" className="w-full h-auto" /></div>
            <div className='px-12'><img src={mysql} alt="Tech Logo 32" className="w-full h-auto" /></div>
            <div className='px-12'><img src={nest} alt="Tech Logo 33" className="w-full h-auto" /></div>
            <div className='px-12'><img src={next} alt="Tech Logo 34" className="w-full h-auto" /></div>
            <div className='px-12'><img src={node} alt="Tech Logo 35" className="w-full h-auto" /></div>
            <div className='px-12'><img src={openai} alt="Tech Logo 36" className="w-full h-auto" /></div>
            <div className='px-12'><img src={php} alt="Tech Logo 37" className="w-full h-auto" /></div>
            <div className='px-12'><img src={postgresql} alt="Tech Logo 38" className="w-full h-auto" /></div>
            <div className='px-12'><img src={python} alt="Tech Logo 39" className="w-full h-auto" /></div>
            <div className='px-12'><img src={qwik} alt="Tech Logo 40" className="w-full h-auto" /></div>
            <div className='px-12'><img src={react} alt="Tech Logo 41" className="w-full h-auto" /></div>
            <div className='px-12'><img src={redis} alt="Tech Logo 42" className="w-full h-auto" /></div>
          </Slider>
        </section>
      </>
    );
  };
  
  export default Skills;