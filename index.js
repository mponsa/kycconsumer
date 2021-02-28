import dotenv from 'dotenv'
import client from '@asnopm/kyc-client'

dotenv.config()

const kycClient = new client.KYC(process.env.API_KEY)

const userData = {
            birthDate : "1985-02-08",
            givenName : "James",
            middleName : "Robert",
            familyName : "Smith",
            licenceNumber : "94977000",
            stateOfIssue : "NSW",
            expiryDate : "2020-01-01"
}

const main = async() => {
  try{  
      const res = await kycClient.validate(userData)
      console.log(`Validation was: ${res.kycResult}`)
  }catch(error){
      console.log(`Validation failed: ${error.message}`)
  }
}

main()