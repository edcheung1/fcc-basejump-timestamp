## FCC Basejump: Timestamp Microservice
#### User stories:

* I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
* If it does, it returns both the Unix timestamp and the natural language form of that date.
* If it does not contain a date or Unix timestamp, it returns null for those properties.

#### Example usage:
`https://edcheung-fcc-timestamp.herokuapp.com/Jan 29, 2016`  
`https://edcheung-fcc-timestamp.herokuapp.com/1-29-16`  
`https://edcheung-fcc-timestamp.herokuapp.com/January 29, 2016`  

#### Example output:
`{
		unix: 1454047200,
		natural: "January 29, 2016"
	}`
