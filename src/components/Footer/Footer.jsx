import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <hr id="footer"/>
        <br />
        <div class="extra">
            <p class="links"><a href="#" id="first">Conditions of Use</a>
            <a class="visit" href="#">Notice of Use</a>
            <a class="visit" href="#">Help</a></p>
            <p class="links foot" id="special">
                © 1996-2016, Amazon.com, Inc. or its affiliates
            </p>
        </div>
    </div>
  )
}

export default Footer