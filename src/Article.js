import React from 'react'
import pic1 from '../src/asset/image/blog-image-1.jpg'
import pic2 from '../src/asset/image/blog-image-2.jpg'

export default function Article() {
  return (
    <div>
      <article>
      <h4 class="date">11/12/20</h4>
      <h2>On the Street in Brooklyn</h2>
      <img src={pic1} alt="pic-1" />
      <p><span>C</span>orem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus ratione eos voluptas asperiores sapiente magnam dolores deserunt necessitatibus a! Ut sequi odit fuga alias quod deserunt exercitationem consequuntur dolor aperiam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam eos aliquam, officia illum nostrum ducimus ad, animi similique ea a, corporis repudiandae est? Earum modi id aut est sunt. ipsum dolor sit, amet consectetur adipisicing elit. Repellendus ratione eos voluptas asperiores sapiente magnam dolores deserunt necessitatibus a! Ut sequi odit fuga alias quod deserunt exercitationem consequuntur dolor aperiam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam eos aliquam, officia illum nostrum ducimus ad, animi similique ea a, corporis repudiandae est? Earum modi id aut est sunt ipsum dolor sit, amet consectetur adipisicing elit. Repellendus ratione eos voluptas asperiores sapiente magnam dolores deserunt necessitatibus a! Ut sequi odit fuga alias quod deserunt exercitationem consequuntur dolor aperiam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam eos aliquam, officia illum nostrum ducimus ad, animi similique ea a, corporis repudiandae est? Earum modi id aut est sunt</p>
      <p class="con">Continue...</p>
      <hr></hr>
      </article>
      <article>
      <h4 class="date">11/11/20</h4>
      <h2>Vintage in Vogue</h2>
      <img src={pic2} alt="pic-2"  />
      <p><span>S</span>ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam eos aliquam, officia illum nostrum ducimus ad, animi similique ea a, corporis repudiandae est? Earum modi id aut est sunt.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam eos aliquam, officia illum nostrum ducimus ad, animi similique ea a, corporis repudiandae est? Earum modi id aut est sunt.ipsum dolor sit, amet consectetur adipisicing elit. Repellendus ratione eos voluptas asperiores sapiente magnam dolores deserunt necessitatibus a! Ut sequi odit fuga alias quod deserunt exercitationem consequuntur dolor aperiam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam eos aliquam, officia illum nostrum ducimus ad, animi similique ea a, corporis repudiandae est? Earum modi id aut est suntipsum dolor sit, amet consectetur adipisicing elit. Repellendus ratione eos voluptas asperiores sapiente magnam dolores deserunt necessitatibus a! Ut sequi odit fuga alias quod deserunt exercitationem consequuntur dolor aperiam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam eos aliquam, officia illum nostrum ducimus ad, animi similique ea a, corporis repudiandae est? Earum modi id aut est sunt</p>
      <p class="con">Continue...</p>
      <hr></hr>
      </article>

    </div>
  )
}
