# Zero-Waste Buddy
Zero-Waste Buddy is the friendly chatbot & marketplace that finds sustainable products for you!
<p align="center">
  <img width="auto" height="auto" src="http://3.14.139.193/wp-content/uploads/2021/07/logo-circular.png">
</p>

### Short Description
Zero-Waste Buddy is your friendly chatbot and marketplace for everyday sustainability on the go.

We have created a Telegram chatbot and marketplace that offers you daily suggestions for sustainable products while you travel. Available in Latin America locations through the Telegram messaging app.

### What's the problem?
Travelers are unlikely to be familiar with the sustainable businesses that exist in their destinations. They are also often unaware of the local waste management systems guidelines. On the other hand, local sustainable businesses are often small and less likely to be able to make their brand knowns than multinational businesses. This results in about 5 million tonnes of waste produced every years by tourism alone.

### How can technology help?
By joining a centralized platform, local businesses can make their brands known and offer their sustainable product catalogs to travelers in their location. IBM's Watson Studio is used to create a natural conversation with the traveler, offering favorite products that are updated daily. Travelers in Latin America can enjoy everyday products rated by users of the Zero-Waste Buddy platform.

### Our solution
We have created a friendly chatbot that utilizes IBM Watson assistant to offer daily sustainable product suggestions. The chatbot will tailor recommendations to favorite products, offer product categories, and generate new product recommendations daily. The Telegram chatbot also has the option to redirect to the Zero-Waste Buddy website to browse the full product catalog, log-in, and to make purchases.

## Contents
1. [The Architecture](#arquitectura)
2. [Roadmap](#map)
3. [Vision](#vision)
4. [Try it - Live Demo](#try)
5. [Resources](#recursos)
6. [Authors](#autores)
7. [Social Media](#redes)

## The Architecture
<a name="arquitectura"></a>
### Resources and Languages
1. Database: MongoDB & MySQL
2. Programming Languages: Javascript, PHP
3. Frameworks: ExpressJS
4. AWS Cloud Services: AWS EC2 Instances
5. IBM Cloud Services: IBM Watson Studio, IBM Cloudant

### Description of Architecture

#### Pre Operation of Chatbot
1. An user needs to fill the form https://anfitriones.herokuapp.com/ to could register as a host, and then generate a QR code that redirects to the chatbot in Telegram
#### Operation of Chatbot
1. A Ecommerce website is developed using WooCommerce to storage tons of products into a MySQL database, also the functionality of Rest-Api of WooCommerce is used to connect to Chatbot and serves data of products.
3. The Chatbot, developed in Watson Studio by IBM and hosted into IBM Cloudant, retrieves all data of products of WooCommerce and shows those to users in Telegram who have already stablished comunication to chatbot
4. The Chatbot displays data products to users and they can interact with commands to search products accodring their categories
5. When user is interested in buying one product, they will be redirect to E-Commerce where can buy the product and search for another categories if they are interested in other products.
<p align="center">
  <img width="auto" height="auto" src="https://user-images.githubusercontent.com/32407895/127758722-65c563d4-9414-4503-9ecb-6d7fc04f1063.png">
</p>

## Roadmap
<a name="map"></a>
#### Time line - by theme - URL
https://app-rm.roadmunk.com/publish/7aae72c4a2fffca18d69aed46ce30fd88b1c767b

#### Time line & milestones - PDF
https://drive.google.com/file/d/1h6DRtSpEeSnPoLQwJFyhsNAXu2YSzV0E/view?usp=sharing

## Vision
<a name="vision"></a>
https://drive.google.com/file/d/1NrzMfPOI0R8nSC3ZI7CiDyqk5oRaUe1g/view?usp=sharing

## Try it - Live Demo
<a name="try"></a>
#### Web site 
http://3.14.139.193/

#### Zero-Waste Buddy Host Form
https://anfitriones.herokuapp.com/

#### Zero-Waste Buddy Chatbot
https://t.me/zeroWasteBuddy_bot?start=getCommand-/inicio

##### Demo Chatbot
https://youtu.be/A46RDwydfXo

## Resources
<a name="recursos"></a>
#### Pitch Video 
https://youtu.be/BayHZPrmYLM

#### Pitch PDF
https://drive.google.com/file/d/1DD1us6TV2EopTBxuULv1aAMzIo7vne54/view?usp=sharing

#### Business Model 
https://drive.google.com/file/d/1Bn2XduXu30xzQB8-AI4NyeJFli3h3q0Z/view?usp=sharing

## Authors
<a name="autores"></a>
1. Raul Alejandro Buendía Montiel - Full Stack Developer
2. Joseph Bonilla - Full Stack Developer
3. Aldair Huamani Cusi - Full Stack Developer
4. Marisol Ramos Camacho - Business Administrator 
5. Yissel Contreras Valeriano - Marketing Specialist

## Social Media
<a name="redes"></a>
* [Facebook](https://www.facebook.com/zerowastebuddy/)
* [Instagram](https://www.instagram.com/zerowastebuddy/)
* [Youtube](https://www.youtube.com/channel/UCyeksk7d-x8zHBCVeim9I_A)







