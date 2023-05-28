import React from 'react';
function Card(){
    return(
        <div>
            this is card
        </div>
    );
}

function Nav(){
    return(
        <nav>
            <img src="./shop-logo.svg" alt="react"/>
            <ul>
                <li><a href="react.dev">home</a></li>
                <li><a href="react.dev">product</a></li>
                <li><a href="react.dev">shop</a></li>
                <li><a href="react.dev">contact</a></li>
                <button class="primary-btn">Enroll</button>
            </ul>
        </nav>
    );
}
function LinkBtn(){
    return (
        <a href="google.com" class="link-btn">start learning</a>
    );
}
function SliderItem(){
    return (
        <div class="SliderItem">
            <img src="./icy.jpg"/>
            <div class="SliderContent">
                <h2>Discovery</h2>
                <div class="SliderInfoBox">
                    <p class="subtitle">We let our work speak for itself. We know your organization is unique, and we take the time to understand your requirements to create a qualitative approach.
                    </p>
                    <LinkBtn/>
                </div>
            </div>
        </div>
    );
}
function Slider(){
    return (
        <div class="slider">
            <div class="sliderChain">
                <SliderItem/>
                <SliderItem/>
                <SliderItem/>
            </div>
        </div>
    );
}

export default function HomePage(){
    return(
        <home>
            <div id="landing">
                <span id="tr"></span>
                <span id="bl"></span>
                <Nav/>
                <h1 id="focalHeading">Forge new <span class="focus">skill.</span></h1>
            </div>
            <p class="subtitle">sensing the inner curiosity and quinching it by deeply fathoming something is beautiful.</p>
            <div class="info">
                <h1 class="infoTitle">
                    What makes us stand out from rest?
                </h1>
                <div class="content">
                <p class="subtitle">We let our work speak for itself. We know your organization is unique, and we take the time to understand your requirements to create a qualitative approach.

                We love partnering up with organizations that aim to positively impact the world through user-centric solutions.</p>
                <LinkBtn/>
                </div>
            </div>
            <Slider/>
        </home>

    );
}