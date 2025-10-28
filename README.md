# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch`
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.

## BTP Services
Service | Plan | Service Key needed | Binding | Service Name (user created)
--------|------|--------------------|---------|------------------------------
SAP HANA Cloud | hana | Yes| No | HANA-DB
Credential Store | trial | Yes | Yes | INS-Cred-Store
Authorization and Trust Management Service | application | Yes | Yes | mydept-auth
SAP HANA Schemas & HDI Containers | hdi-shared | Yes | Yes | mydept-db

## Cred Store
Service: Credential Store 
Plan: trial 
Service Name: INS-Cred-Store 
Namespace: aribabtp
Password: aribabtp_2sv
Value: could be anything like (Ariba@1234)
only namespace, name, value filled.

## Package.json
  "cds": {
    "requires": {
      "[production]": {
        "auth": "xsuaa",
        "db": "hana"
      }
    },
    "server": {
      "index": true
    }
  }

  ## MTA - refer MTA file 

  ## .env 
  create .env file which has entry for namespace
  credstoreNamespace=aribabtp

  ## cds install
  cds add xsuaa - to add xsuaa service module in package/mta file
  cds add mta " add mta file to project
  cds bind -2 serviceName:ServiceNameServiceKey " services like cred store and XSUAA needs to be bind

  ## npm install
    npm install
    npm install node-jose -- save
    npm install node-fetch -- save " specific version command-->npm install node-fetch@2.7.0 to uninstall-->npm uninstall node-fetch   
    npm install @sap/xsenv" -- save
  ## Create Cred.js
  create credential handler file to make connection between BTP Cred store and read specific password/credentials maintained in cred store


  ## to run app locally
    cds bind -2 serviceName:ServiceNameServiceKey " services like cred store and XSUAA needs to be bind

  ## deploy
  mbt build " right after addition of mta file 
  cf deploy (mtar path)