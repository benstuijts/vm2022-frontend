import Head from 'next/head'
import sanityClient from '../client';
import { useState, useEffect } from 'react';

import client from '../client';

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
        <div>
          <h1>WELKOM</h1>
          
        </div>

        <h1 className="title mt-5">
          Welcome to VM website
        </h1>

        <p className="description">
          
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique nibh at dui consequat sagittis. Mauris bibendum vulputate imperdiet. Donec libero dolor, euismod ac dolor eu, interdum sodales lectus. Vivamus posuere massa vel sollicitudin porta. In at efficitur turpis. Sed consectetur commodo tempus. Morbi tincidunt posuere eros, sit amet volutpat nulla mattis at. Donec id libero sapien. Cras interdum, arcu in pharetra laoreet, massa magna bibendum elit, at facilisis nulla arcu eget est. In vehicula eu nisi vitae semper.

        </p>

        

        <p>
        Suspendisse imperdiet non orci eu fringilla. Nullam pretium interdum suscipit. Nulla tempus mauris non neque semper, id dictum tellus hendrerit. Aliquam accumsan posuere ligula eget aliquam. In hac habitasse platea dictumst. Suspendisse potenti. Nullam rhoncus nisl quis rutrum pretium. Cras cursus dui ac felis finibus varius. Aenean pulvinar convallis eros, non fringilla odio tempor ac. Donec porta porttitor purus, hendrerit placerat mauris. Aenean interdum lacus ac mollis fringilla. Maecenas lobortis dapibus feugiat.
        </p>

        <p>
        Integer diam urna, rhoncus suscipit aliquet a, posuere maximus nibh. Nunc id metus ac risus faucibus molestie vel a nisi. Duis ultrices enim a felis vehicula, non suscipit turpis mollis. Maecenas commodo felis eleifend urna maximus dapibus. Etiam a vestibulum quam. Pellentesque at sagittis lorem. Maecenas nec ullamcorper turpis. Sed at molestie odio. Vivamus facilisis vitae est vel ultrices. Integer ipsum libero, venenatis ac euismod quis, rhoncus at ligula. Aliquam molestie felis suscipit turpis volutpat, eu elementum felis tempor. Aenean bibendum convallis facilisis. Nulla vitae ipsum finibus, semper lacus et, gravida sapien. Praesent dictum tortor leo, dapibus posuere elit congue quis.


        </p>
        <p>
        Aenean augue nisi, condimentum eu lobortis eu, suscipit vel ex. Aenean sodales hendrerit erat vitae blandit. Vestibulum tristique massa a magna hendrerit pharetra dictum eget est. Cras eu lacus vitae urna tempor imperdiet eget sed libero. Duis feugiat, libero vel congue tempor, purus sem hendrerit sapien, sit amet efficitur mauris diam ut ipsum. Duis auctor fermentum interdum. Sed congue commodo pellentesque. Aenean eleifend rhoncus mauris in sollicitudin. Duis ut mi felis. Aliquam id tincidunt quam. Suspendisse potenti. Aliquam commodo vehicula erat eget viverra. Vestibulum vitae quam vitae nisi faucibus faucibus. Praesent iaculis felis sed nulla aliquet placerat. Etiam sed consequat ligula.

        </p>
        
        <p>
        Fusce fringilla scelerisque risus non aliquet. Morbi sapien nulla, tincidunt volutpat elementum eget, sollicitudin vel lacus. Maecenas auctor at nulla vitae placerat. In tempor ultrices efficitur. Phasellus ullamcorper, turpis id ultricies egestas, mauris tellus egestas turpis, sit amet scelerisque dolor leo ac ex. Donec quis nisl non elit efficitur consequat. Nullam a venenatis justo, ut ultrices sapien. Integer sit amet semper diam, sed egestas lectus. Quisque sed ante lorem. Fusce dictum pulvinar elit quis suscipit. Ut sagittis ligula in massa efficitur, a imperdiet est consectetur. Nunc non eros ligula. Cras et risus at ipsum dapibus vestibulum vel vitae orci. Aenean egestas sodales blandit.

        </p>
      </main>

      

      
    </div>
  )
}
