// import styles from './page.module.css'

const data = require('./../../../countries.json')


export default function CountryView(context: any) {
  let i: any
  const country = data.find((i: any) => i.id == context.params.id)
  const curSymbol: string = country.currency_symbol ? country.currency_symbol : ''
  const curName: string = country.currency_name ? country.currency_name : ''

  return (
    <div style={{ margin: 'auto', display: 'block' }}>
      <br />
      <div style={{ border: '4px solid lime', width: '400px', margin: '10px', padding: '12px', backgroundColor: 'lightskyblue', display: 'flex', flexDirection: 'row' }}>
        <div style={{ flexDirection: 'column', margin: '20px' }}>
          <h1>{country?.name} </h1>
          <div>capital: {country?.capital}</div>
          <div>region: {country?.region}</div>
          <div>currency: {curName} (<span style={{fontSize: '1.2em'}}>{curSymbol}</span>)</div>
        </div>
        <div style={{ fontSize: '7.5em', margin: '20px' }}>
          {country?.emoji}
        </div>
      </div>
    </div>
  )
}
