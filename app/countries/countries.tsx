import './page.module.css'

interface CountriesProps {
  title?: string
  capital?: string
  region?: string
  currency?: string
  flag?: string
  id?: number
}

export default function Countries(props: CountriesProps) {
  return (
    <a href={`/countries/${props.id}`}>
      <div style={{ border: '4px solid lime', width: '400px', margin: '10px', padding: '14px', backgroundColor: 'lightskyblue' }}>
        <h1 style={{ color: 'darkBlue', textDecoration: 'none' }}>{props.title} {props.flag}</h1>
        {/* <div>capital: {props.capital}</div>
        <div>region: {props.region}</div>
        <div>currency: {props.currency}</div> */}
      </div>
    </a>
  )
}
