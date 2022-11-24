import Img from './assets/avatar.png';
import Img2 from './assets/LinkedIn.png';
import Img3 from './assets/Facebook Circled.png';
import Img4 from './assets/Twitter.png';
import Img5 from './assets/Img.png';
import Img6 from './assets/Heart.png';
import Img7 from './assets/Speech Bubble.png'
import Left from './assets/Left.png'

function Page2 (){
    return(
        <div class ="container" >
        <div class="button-back">
            <button type="button" class="btn btn-outline-dark go-back" style="border:none" > <img src={Left} alt="btn"/></button>
        </div>
            <div class="row">
            <div class="col-1">
                <img src={Img}alt="..." />
            </div>
            <div class="col-9">
                <div col>
                    <p><b class="critics2">Author name</b></p>
                </div>
                <div class="col"><p>
                    <small class="data2 text-muted">7 July</small>
                    <small class="text-muted">·</small>
                    <small class="text-muted">12 min read</small>
                    <small class="text-muted">·</small>
                    <small class="text-muted">Members-only</small>
                  </p></div>
            </div>
            <div class="col-2">
                <button class="media"><img src={Img2} alt=""/></button>
                <button class="media"><img src={Img3} alt=""/></button>
                <button class="media"><img src={Img4}alt=""/></button>
            </div>
        </div>
        <div class="h-40 row"><p class="h3 title2" id="title2"></p></div> 
        <div class="h-25 row">
            <p id="description2">How product designers can break from the status quo and help our planet</p>
          </div>
          <div class="col">
            <img className="news-image" class="img-fluid image2" src= {Img5}alt="..." />
          </div>
          <div class="h-30 row"><p class="h3 subheader">  Subheader</p></div> 
          <div class="col">
            <p>How long are you awake in the morning before you go online? Perhaps it’s while you’re still lying in bed, using a news feed or social media as the needed stimulant to push you out from under the covers. Or maybe you wait to open your device until after a warm shower and cup of coffee. If you use sleep tracking apps, you might say you never signed off in the first place.
                And, like millions of others during the pandemic, the internet is probably what enabled you to stay in touch with family, or complete entire years of work and/or school remotely. If this sounds familiar, then you live in a part of the world where an internet connection now counts as an essential utility — one that’s as easy to take for granted as the natural gas heating your shower water or the electricity powering your coffee maker.
                But if you think we are hyperconnected today, just wait. Globally, just over 55% of today’s households have an internet connection. This gap between the internet haves and have-nots is referred to as the digital divide, and access is skewed toward richer nations. The gap is projected to close in the next decade as billions of homes connect to the internet for the first time and by 2030 it’s estimated that the technology industry could account for 20% of the global electricity demand. This presents a troublesome dichotomy. On one hand, it supports livelihoods, educations, and bolsters the global economy; on the other hand, the increased usage of the apps, websites, and services that we build will place an even greater strain on our already-overloaded power grids.</p>
          </div>
    
        <div class="h-40 col footer">
            <button class="media"><img src={Img6} alt=""/></button>
            <small class="text-muted" className="date">180</small>
            <button class="media"><img src={Img7}alt=""/></button>
            <small class="text-muted" className="date">12</small>
    
        </div>
    
        </div>
        )
}

export default Page2;