// import styles from './page.module.css'

const data = require('./../../../countries.json')


export default function CountryView(context: any) {
  const country = data.find(i => i.id == context.params.id)
  console.log(data)

  return (
    <div style={{ margin: 'auto', display: 'block' }}>
      {/* <br />
      <div style={{ border: '4px solid lime', width: '400px', margin: '10px', padding: '12px', backgroundColor: 'lightskyblue' }}>
        <h1>{country.name} {country.emoji}</h1>
        <div>capital: {country.capital}</div>
        <div>region: {country.region}</div>
        <div>currency: {country.currency_name} (<span style={{fontSize: '1.2em'}}>{country.currency_symbol}</span>)</div>
      </div> */}
    </div>
  )
}
