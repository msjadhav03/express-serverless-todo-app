# Serverless Development Node.js and AWS

# Prerequisites

- You need an Amazon Web Services account to get started.
- Python and JavaScript/Typescript are popular programming languages for serverless. You will see these most frequently in examples, tutorials, and workshops.
- Java, C#, Go, Ruby, and PowerShell are available runtimes, but you can also bring your own.
Set up your development environment with your preferred local IDE
- AWS data centers are organized into one or more Availability Zones located in multiple regions across the globe
- Region codes and ARNs (Amazon Resource Names) are used to identify and connect to specific AWS services and resources
- Responsibility for security of serverless solutions is shared between you and AWS.


# Introduction

- Needs of Serverless architecture
    1. a computing service
    2. Database Service
    3. HTTP gateway Service
- Event driven programming
- Serverless programming pros
    1. Easy to administrate
    2. Scales without limits
    3. Easy to get going
    4. Usually Cheap
    5. Works different workloads
    6. Security first class citizen
    7. Can be used in hybrid env
- Serverless programming cons
    1. Vendor Specific hard to move from one vendor to another.
    2. Little control over OS.
    3. Limited Memory 3 mega byte.
    4. Execution time 15 min max.
    5. Limited unit testing.
    6. Latency.
    7. Limited debugging capabilities.


# AWS Lambda

- Compute Service, runs code, response to events, managages compute resources.
- Runs code without provising and managing.
- AWS Lambda create functions, self-contained applications written in one of the supported languages and runtimes.
- Access to CloudWatch Logs by default.
- Logs are version specific of Lamda function.
- Cloud 9 AWS IDE to edit code.
- Preprocess Data before feeding to Machine learning Model.
- Support small tests.

# How AWS Lamda works ?

- Function runs in its own container. 
- `Function creation -> packaging into new container -> executing conatiner -> allocating RAM and CPU -> Once done -> deallocate assigned resources`
- Cost = RAM * amount of time

# Benefits of AWS Lamda

- Full managed
- Pay as per go
- Automatic Scaling

# AWS S3

- Simple Storage Service. 
- They need to have their space provisioned ahead of a time.
- S3 buckets needs unique name globally.
- S3 supports backup.
- It can be setup to encrypt files.
- It has ability to share objects publicly.

# AWS IAM

- Indentity Access Management
- Provides Security
- It has Roles, Users, Policies, Groups.
- Allows to set password policy. i.e. one lower, one upper et cetera.
- Allows auditing of user login and policy usage.


# AWS CLI

- Command Line interface to access AWS services.
- CLI uses API keys to handle authentication.
- Configure AWS CLI.
```js 
aws configure
// provide required configurations i.e. access key and secrete Key
```
- Some basic commands
    - To get S3 list
    ```js 
    aws s3 ls
    ```
    - To invoke lamda function
    ```js 
    aws lambda invoke --function-name customHandler-dev response_output.txt
    ```


# AWS API Gateway

-  AWS API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale.
- act as the "front door" for applications to access data, business logic, or functionality from your backend services.
- securing REST, HTTP, and WebSocket APIs
- Support for stateful (WebSocket) and stateless (HTTP and REST) APIs.
- Support for custom domain names.
- CloudTrail logging and monitoring of API usage and API changes.

# AWS CloudFront

- It is used for global deployment, and setting up many HTTP features.

# Creating Lamda function using serverless framework

Install Serverless Framework on your machine
```js
npm install serverless -g
```

