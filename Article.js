import Img1 from './assets/avatar_default.png'
import Img2 from './assets/skeleton-rect.png'
import Img3 from './assets/thread1.png'


function Article(){
    return(

<div class="container">
<div class="col-12">
  <div class="row">
    <div class="col-8">
      <div class="box1">
        <div class="col-1">
          <img src={Img1} alt="..." />
        </div>
        <div class="col-11">
          <p>
            <b>Author name</b> <small class="text-muted">in</small>
            <b>Topics name</b> <small class="text-muted">7th July</small>
          </p>
        </div>
      </div>
      <div class="h-25 row"><h1> 7 Practical CSS Tips</h1></div>
      <div class="h-25 row">
        <p>
          You not only learn more Python by implementing what you
          already know but, in the end, you can see how all your hard
          work pays off.
        </p>
      </div>

      <div class="h-25 row">
        <div class="col-2">
          <span>JavaScript</span>
        </div>
        <div class="col-8">
          <p>
            <small class="text-muted">12 min read</small>
            <small class="text-muted">Selected for you</small>
          </p>
        </div>
        <div class="col-2 images" style={{gap:'10px'}}> 
          <img src={Img2} alt="..." />
          <img src={Img2} alt="..." />
          <img src={Img2} alt="..." />
        </div>
      </div>
    </div>

    <div class="col">
      <img src={Img3} class="img-fluid" alt="..." />
    </div>
  </div>
  <hr />
</div>
</div>
    )
}

export default Article;