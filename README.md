# Wyzetalk

## NodeJS encryption for C# decryption

Sometimes you need to send an encrypted piece of data to an ASP.NET app from nodejs application.

### Quick start

Using node 12 at least. (Assuming you have all that going)

```
npm i
```

```
node quick-start.js
```
Take the logged out command:
```
cd dn
dotnet run 1234567890ABCDEF TNdSjpSrEes9BXICGjy3oxRYl9k7KgeXA6eFENgXt07iYEtJNdw/WkbfgvWpGgBI9NDxF3e2ooVWp3Om9oxZU5ldlcWdnn81A8SL6nbg9tE=
```
You should get:
`{"field1":"Some data","field2":"More stuff","number1":4,"float1":5.6}`



### Other tests

* key = 1234567890ABCDEF
* string to encrypt = somestring

```
node encrypt 1234567890ABCDEF somestring
```
```
cd dn
dotnet run 1234567890ABCDEF 4HsQBhzHZADqlxznkvZXdQ==
```

You should get "somestring"

## Limits

Encryption key length is 128 (16 chars)

## TODO

Tried with 256 but could not see it through. Anyone with suggestions welcome

## DOTNET on a Mac

`dotnet --info`

```
.NET SDK (reflecting any global.json):
 Version:   6.0.101
 Commit:    ef49f6213a

Runtime Environment:
 OS Name:     Mac OS X
 OS Version:  11.6
 OS Platform: Darwin
 RID:         osx.11.0-x64
 Base Path:   /usr/local/share/dotnet/sdk/6.0.101/

Host (useful for support):
  Version: 6.0.1
  Commit:  3a25a7f1cc

.NET SDKs installed:
  3.1.300 [/usr/local/share/dotnet/sdk]
  6.0.101 [/usr/local/share/dotnet/sdk]

.NET runtimes installed:
  Microsoft.AspNetCore.App 3.1.4 [/usr/local/share/dotnet/shared/Microsoft.AspNetCore.App]
  Microsoft.AspNetCore.App 6.0.1 [/usr/local/share/dotnet/shared/Microsoft.AspNetCore.App]
  Microsoft.NETCore.App 3.1.4 [/usr/local/share/dotnet/shared/Microsoft.NETCore.App]
  Microsoft.NETCore.App 6.0.1 [/usr/local/share/dotnet/shared/Microsoft.NETCore.App]

To install additional .NET runtimes or SDKs:
  https://aka.ms/dotnet-download
```

## DOTNET Runtime change

The dn/db.csproj file has:

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>netcoreapp3.1</TargetFramework>
  </PropertyGroup>

</Project>
```

You might need to change the target framework from netcoreapp3.1 to whatever you have installed
