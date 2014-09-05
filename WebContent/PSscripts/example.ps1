# I am currently following an online cource on PowerShell. I will make this my code examples for the cource.

# get-help get-eventlog -showwindow
get-eventlog -logname system -newest 5 -entrytype error

# Use get-help and look at all the syntaxes and see what you can use. 
# Also check verb for get,set,clear etc. and find out how to do what you need to get the work done.
# They talk alot about help and get-help

# Get-process gives you a list of objects witch you can play with. 
get-process | where handles -gt 900 | sort handles
# If you want to see what more properties and methods 
# in the object you can play with you can use get-member

get-service -name bits | get-member

# Getting only 2 properties from services
get-service | select -Property name,status | sort -property status