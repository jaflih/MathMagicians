import React from 'react';
import Header from '../components/Header';

export default function Home() {
  return (
    <section className="home">
      <Header />
      <h2>Welcome to our page</h2>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat leo et nunc blandit
        scelerisque. Ut ac eros varius, sollicitudin risus ac, pulvinar justo. Ut scelerisque tempor
        magna, eget eleifend erat accumsan in. Aliquam tincidunt aliquam nunc ut porttitor. Fusce
        aliquam dapibus odio, et lacinia turpis accumsan non. Vestibulum quis tempus massa.
        Curabitur at lorem id metus gravida fringilla non vitae nisl. Suspendisse elementum eget
        urna a pretium.
      </div>

      <div>
        Suspendisse at diam nec felis tempus lacinia eu eget ipsum. Pellentesque congue orci non leo
        dignissim, id blandit magna auctor. Aliquam volutpat vulputate gravida. Pellentesque sed
        iaculis ex, sit amet efficitur purus. Sed ipsum libero, laoreet feugiat ligula ac, ultricies
        tempor enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. In commodo scelerisque magna, sit amet congue augue aliquet condimentum.
        Donec ut enim molestie, volutpat lorem in, vehicula ante. Ut fermentum, leo sit amet
        porttitor convallis, ante nisl eleifend nisl, tincidunt lobortis erat lorem vitae ipsum.
        Proin vel nunc accumsan, finibus sapien quis, tempor erat. Etiam eu metus quam.
      </div>
    </section>
  );
}
