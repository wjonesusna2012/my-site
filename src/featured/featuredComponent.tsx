import React, { useState } from 'react';
import '../styles/featuredComponent.css';

interface FeaturedComponentProps {
  title: string,
  featuredItems: Array<{imageName: string, linkText: string}>,
}

const FeaturedComponent: React.FC<FeaturedComponentProps> = ({ 
  title,
  featuredItems,
}) => {
  return (
    <div className="featuredContainer">
      <div className="featured featuredContainerTitle">
        {title}
      </div>
      {
        featuredItems.map(fI => {
          return (
            <a className="featured featuredContainerElement" href="https://github.com/wjonesusna2012">
                <div><img className="thumb" src={fI.imageName} /></div>
                <div style={{lineHeight: "40px"}}>{fI.linkText}</div>
            </a>
        )})
      }
    </div>
  )
} 

export default FeaturedComponent;