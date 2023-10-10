# Serverless Development Node.js and AWS

# Prerequisites

- You need an Amazon Web Services account to get started.
- JavaScript/Typescript are popular programming languages for serverless. 
- Set up your development environment with your preferred local IDE
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


# AWS API Gateway

-  AWS API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale.
- act as the "front door" for applications to access data, business logic, or functionality from your backend services.
- securing REST, HTTP, and WebSocket APIs
- Support for stateful (WebSocket) and stateless (HTTP and REST) APIs.
- Support for custom domain names.
- CloudTrail logging and monitoring of API usage and API changes.

# AWS CloudFront

- It is used for global deployment, and setting up many HTTP features.

# AWS Route 53
- Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service. 
- Reserve Domain names, update DNS and monitor websites.
- Amazon Route 53 helps to make that connection between domain names and IP addresses.
- `How does it works?`

    1. A user opens a web browser, enters www.example.com in the address bar, and presses Enter.
    2. The request for www.example.com is routed to a DNS resolver, which is typically managed by the user's internet service provider (ISP), such as a cable internet provider, a DSL broadband provider, or a corporate network.
    3. The DNS resolver for the ISP forwards the request for www.example.com to a DNS root name server.
    4. The DNS resolver forwards the request for www.example.com again, this time to one of the TLD name servers for .com domains. The name server for .com domains responds to the request with the names of the four Route 53 name servers that are associated with the example.com domain.
    5. The DNS resolver caches (stores) the four Route 53 name servers. The next time someone browses to example.com, the resolver skips steps 3 and 4 because it already has the name servers for example.com. The name servers are typically cached for two days.
    6. The DNS resolver chooses a Route 53 name server and forwards the request for www.example.com to that name server.
    7. The Route 53 name server looks in the example.com hosted zone for the www.example.com record, gets the associated value, such as the IP address for a web server, 192.0.2.44, and returns the IP address to the DNS resolver.
    8. The DNS resolver finally has the IP address that the user needs. The resolver returns that value to the web browser.
    9. The web browser sends a request for www.example.com to the IP address that it got from the DNS resolver. This is where your content is, for example, a web server running on an Amazon EC2 instance or an Amazon S3 bucket that's configured as a website endpoint.
    10. The web server or other resource at 192.0.2.44 returns the web page for www.example.com to the web browser, and the web browser displays the page.

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


# Creating Lamda function using serverless framework

Install Serverless Framework on your machine
```js
npm install serverless -g
```

