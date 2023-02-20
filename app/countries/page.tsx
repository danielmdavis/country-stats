import styles from '../page.module.css'
import Countries from './countries'

const data = require('./../../countries.json')



export default function CountriesHome() {

  const countries = data?.map((item: any) => {
    return(
        <Countries
        title={item.name}
        capital={item.capital}
        region={item.subregion}
        currency={item.currency_name}
        flag={item.emoji}
        key={item.id}
        id={item.id}
      />
    )
  })

  return (
    <main>
      <br /><br />
      <h1>ze countries in the world</h1>
     {countries}
    </main>
  )
}
