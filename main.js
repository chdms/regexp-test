const str = `
010 -123-4567
thesecon@gamil.com
the quick brown fox jumps dog
https://
abbcccdddd
sldkjf the askdfj
hxyp
http://localhost.1234
동해물과_백두산이 마르고 닳도록
`



console.log(
  str.match(/.{1,} (?=@)/g)
)