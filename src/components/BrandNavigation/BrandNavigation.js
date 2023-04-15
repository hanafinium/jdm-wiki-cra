import React from "react";
import './brandnavigation.css'
import daihatsuLogo from '../../../src/logos/daihatsu.png'
import nissanLogo from '../../../src/logos/nissan.png'
import subaruLogo from '../../../src/logos/subaru.png'
import toyotaLogo from '../../../src/logos/toyota.png'
import mitsubishiLogo from '../../../src/logos/mitsubishi.png'
import mazdaLogo from '../../../src/logos/mazda.png'
import hondaLogo from '../../../src/logos/honda.png'

function BrandNavigation() {
    //alternative method is fetching the data, use map and return an anchor tag for each brand
    return(
        <section>
            <nav className="brand-navigation">
                <p className="medium-font header">Search by brand</p>
                <div className="brand-logos">
                    <a href="/posts/daihatsu"><img src={daihatsuLogo} alt="daihatsu logo" width={160} height={125}/></a>
                    <a href="/posts/nissan"><img src={nissanLogo} alt="nissan logo" width={160} height={125}/></a>
                    <a href="/posts/subaru"><img src={subaruLogo} alt="subaru logo" width={160} height={125}/></a>
                    <a href="/posts/toyota"><img src={toyotaLogo} alt="toyota logo" width={160} height={125}/></a>
                    <a href="/posts/mitsubishi"><img src={mitsubishiLogo} alt="mitsubishi logo" width={160} height={125}/></a>
                    <a href="/posts/mazda"><img src={mazdaLogo} alt="mazda logo" width={160} height={125}/></a>
                    <a href="/posts/honda"><img src={hondaLogo} alt="honda logo" width={160} height={125}/></a>
                </div>
            </nav>
        </section>
    )
}

export default BrandNavigation;