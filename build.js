'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Wassim Chegham'),
  handle: chalk.white('@manekinekko'),
  work: chalk.white('Head of Open Source at SFEIR'),
  opensource1: chalk.white('Angular core team '),
  opensource2: chalk.white('Compodoc core team '),
  opensource3: chalk.white('Xlayers Author '),
  opensource4: chalk.white('Klingon Author '),
  opensource5: chalk.white('ngx.tools Author '),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('manekinekko'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~manekinekko'),
  github: chalk.gray('https://github.com/') + chalk.green('manekinekko'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('wassimchegham'),
  web: chalk.cyan('https://wassim.app'),
  npx: chalk.red('npx') + ' ' + chalk.white('wassimchegham'),
  labelWork: chalk.white.bold('       Work:'),
  labelOpenSource1: chalk.white.bold('Open Source:'),
  labelOpenSource2: chalk.white.bold('            '),
  labelOpenSource3: chalk.white.bold('            '),
  labelOpenSource4: chalk.white.bold('            '),
  labelOpenSource5: chalk.white.bold('            '),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const opensourcing1 = `${data.labelOpenSource1}  ${data.opensource1}`
const opensourcing2 = `${data.labelOpenSource2}  ${data.opensource2}`
const opensourcing3 = `${data.labelOpenSource3}  ${data.opensource3}`
const opensourcing4 = `${data.labelOpenSource4}  ${data.opensource4}`
const opensourcing5 = `${data.labelOpenSource5}  ${data.opensource5}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               opensourcing1 + newline + // data.labelOpenSource1 + data.opensource1
               // opensourcing2 + newline + // data.labelOpenSource2 + data.opensource2
               // opensourcing3 + newline + // data.labelOpenSource3 + data.opensource3
               // opensourcing4 + newline + // data.labelOpenSource4 + data.opensource4
               // opensourcing5 + newline + 
	       newline + // data.labelOpenSource5 + data.opensource5
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.red(boxen(output, options)))
