import { useState } from "react";
import ServiceCard from './ServiceCard';
import './ServicesStyles.scss';

const Services = () => {

    const [services] = useState([
        {
            id: 0,
            title: "Oil Change",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        },
        {
            id: 0,
            title: "Oil Change",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        },
        {
            id: 0,
            title: "Oil Change",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        },
        {
            id: 0,
            title: "Oil Change",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        },
        {
            id: 0,
            title: "Oil Change",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        },
        {
            id: 0,
            title: "Oil Change",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        },
        {
            id: 0,
            title: "Oil Change",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        },
        {
            id: 0,
            title: "Oil Change",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        },
        {
            id: 0,
            title: "Oil Change",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        },
        {
            id: 0,
            title: "Oil Change",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        },
        {
            id: 0,
            title: "Oil Change",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        },
        {
            id: 0,
            title: "Oil Change",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        }
    ]);

    return ( 
        <div className="services">
            {
                services.map((service) => {
                   return <ServiceCard service={service} key={service.id} />
                })
            }
        </div>
     );
}
 
export default Services;