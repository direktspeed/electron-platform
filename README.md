# electron-platform
Electron as A Platform Desktop App to run Electron Apps with a single Electron Installation and a Compatible single binary node version


## Why?
Electron Apps get usal packaged into binarys to install them without additional dependencys as Electron Apps are so Common it is more clever to offer a Open Source Electron Appstore
to Run Electron Apps Directly from github or other Sources. that Allows More easy modification and mostly drops the need for additional build processes on smaller and faser updates.

## But AwesomeOS?
At present i have no time to maintain all the variations that would be needed for public usefullness i need to educate a bigger team.

## Usage?
Install NodeJS First Most best via the Platform Installer if your running on windows please install all additions. I have no code in place to do all that for you.
Then use electron-platform as follows npx @direktspeed/electron-platform add @latest to upgrade do npm i -g @direktspeed/electron-platfrom@latest to speed up npx

on linux use this platform installer if you got none
```sh
(MIRROR=https://nodejs.org/dist/latest; VERSION=; DIR=/usr/local; SYSTEM=linux-x64; curl -s -L ${MIRROR}${VERSION}/$(curl -s -L ${MIRROR}${VERSION} | grep 'tar.gz' | grep ${SYSTEM} | cut -d\" -f2) | tar -xvz --strip-components 1 -C ${DIR})
```

Electron platfrom is designed to run even multiple Electron versions if needed and diffrent node versions in isolated context it does so via npx

```js
npx -p node@latest -p electron@latest elctron 
```

That uses the npm native ways to do that to speed up that process again npm i -g electron 
*** Warning *** do not install node@* package global this would result in a none supported 
install at present!
