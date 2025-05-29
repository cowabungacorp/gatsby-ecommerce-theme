import * as React from 'react';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';
import { toOptimizedImage } from '../helpers/general';

const IndexPage = () => {
  
  return (
    <Layout disablePaddingBottom>


     <div class="container">
        <div class="star-icon">★</div>
        <h1>Estamos Quase Lá!</h1>
        <p>
            Prepare-se para uma experiência incrível! A <span class="store-name">Pulsar Azul</span>
            está chegando com uma seleção especial de <span class="product-niche">produtos autistas</span>
            cuidadosamente pensados para trazer conforto, desenvolvimento e alegria.
        </p>
        <p>
            Estamos trabalhando duro para que tudo esteja perfeito. Em breve, você terá acesso a um universo de
            possibilidades. Fique de olho!
        </p>
        <p class="text-sm text-gray-500 mt-4">
            Agradecemos a sua paciência e entusiasmo!
        </p>
    </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
