<h1 align="center">VOGUE: Try-On by StyleGAN Interpolation Optimization</h1>

<pre class="major">
 	<a href="https://katiemlewis.github.io/" target="_blank" class="authors">Kathleen M Lewis</a><sup>1,2</sup>		<a href="https://www.linkedin.com/in/srivatsan-varadharajan-9a570818" target="_blank" class="authors">Srivatsan Varadharajan</a><sup>1</sup>		<a href="https://sites.google.com/view/irakemelmacher/home" target="_blank" class="authors">Ira Kemelmacher-Shlizerman</a><sup>1,3</sup>
  		<sup>1</sup>Google Research	<sup>2</sup>MIT CSAIL	 <sup>3</sup>University of Washington
</pre>
<div id="buttons" align="center">
    <code><a href="static_files/resources/VOGUE-virtual-try-on.pdf" target="_blank" class="button big wide smooth-scroll-middle"> Paper </a> </code>
    &nbsp;<code><a href="http://arxiv.org/abs/2101.02285" target="_blank" class="button big wide smooth-scroll-middle">arXiv </a> </code>
    &nbsp;<code><a href="https://youtu.be/AWd7x_3GaZk" target="_blank" class="button big wide smooth-scroll-middle"> Video </a> </code>
    &nbsp;<code><a href="demo_rewrite.html" target="_blank" class="button big wide smooth-scroll-middle"> Interactive Example</a> </code>
</div>
<br>

<div align="center">
	<img border=0 src="ui/VOGUE.png" width="666">
</div>

Figure 1: VOGUE is a StyleGAN interpolation optimization algorithm for photo-realistic try-on. Top: shirt try-on automatically synthesized by our method in two different examples. Bottom: pants try-on synthesized by our method. Note how our method preserves the identity of the person while allowing high detail garment try on.

### Abstract

Given an image of a target person and an image of another person wearing a garment, we automatically generate the target person in the given garment. At the core of our method is a pose-conditioned StyleGAN2 latent space interpolation, which seamlessly combines the areas of interest from each image, i.e., body shape, hair, and skin color are derived from the target person, while the garment with its folds, material properties, and shape comes from the garment image. By automatically optimizing for interpolation coefficients per layer in the latent space, we can perform a seamless, yet true to source, merging of the garment and target person. Our algorithm allows for garments to deform according to the given body shape, while preserving pattern and material details. Experiments demonstrate state-of-theart photo-realistic results at high resolution (512 x 512).

### VOGUE Method
<div class="abstract">
	<p>We train a pose-conditioned StyleGAN2 network that outputs RGB images and segmentations.</p>
	<img src="static_files/resources/stylegan.png" alt="" />
	<p>After training our modified StyleGAN2 network, we run an optimization method to learn interpolation coefficients for each style block. These interpolation coefficients are used to combine style codes of two different images and semantically transfer a region of interest from one image to another. This method can be used for generated StyleGAN2 images or on real images by first projecting the real images into the latent space.  </p>
	<img src="static_files/resources/optimization.png" alt="">
</div>

Figure 2: The try-on optimization setup illustrated here takes two latent codes z<sup>+</sup><sub>1</sub> and z<sup>+</sup><sub>2</sub> (representing two input images) and a pose heatmap as input into a pose-conditioned StyleGAN2 generator (gray). The generator produces the try-on image and its corresponding segmentation by interpolating between the latent codes using the interpolation-coefficients <i>q</i>. By minimizing the loss function over the space of interpolation coefficients, we are able to transfer garment(s) <i>g</i> from a garment image <i>I<sub>g</sub></i>, to the person image <i>I<sub>p</sub></i>.

### Generated Image Try-On

<p>VOGUE can transfer garments between different poses and body shapes. It preserves garment details (shape, pattern, color, texture) and person identity (hair, skin color, pose). </p>
	
#### Shirt Try-On
With VOGUE, the same person can try on shirts of different styles (above). The identity of the person is preserved. When transferring a shorter garment or a different neckline, VOGUE is able to synthesize skin that is realistic and consistent with identity (below). 

<table>
	<tbody>
	<tr>
		<td>
			<div align="center">
				 <img class="gif" src="static_files/resources/demo-shirts-slow.gif">
			</div>
		</td>
		<td>
			<div align="center">
				<img src="static_files/resources/shirt-tryon.png" alt="">
			</div>
		</td>
	</tr>
	</tbody>
</table>

<br>

Different people can also try on the same shirt (below). The characteristics of the shirt are preserved across different poses and people.

#### Pants Try-On

<table>
	<tbody>
	<tr>
		<td>
			<div align="center">
				<img class="gif" src="static_files/resources/demo-shirts-different-people-slow.gif" width="666" >
			</div>
			<div align="center">
				 <img class="gif" src="static_files/resources/demo-pants-slow.gif">
			</div>
		</td>
		<td colspan="1" rowspan="3">
			<div align="center">
				<img src="static_files/resources/pants_tryon.png" alt="">
			</div>
		</td>
	</tr>
	</tbody>
</table>

<div align="center">
	
	
</div>

### Projected Image Try-On

Virtual try-on between two real images is possible by first projecting the two images into the StyleGAN Z+ latent space. Improving projection is an active area of research.

#### Shirt Try-On
<img src="static_files/resources/tryon_real.png" alt="">

#### Comparison with SOTA
<img src="static_files/resources/sota_comparison.png" alt="">
<p>
	<small>
		Wang, Bochao, et al. "Toward characteristic-preserving image-based virtual try-on network." Proceedings of the European Conference on Computer Vision (ECCV). 2018. <br>
		<br>Men, Yifang, et al. "Controllable person image synthesis with attribute-decomposed gan." Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. 2020.	
	</small>
</p>

### Acknowledgements

We thank Edo Collins, Hao Peng, Jiaming Liu, Daniel Bauman, and Blake Farmer for their support of this work.

<br>
<br>
<p align="center">Feel free to ask any questions, open a PR if you feel something can be done differently!</p>
<h2 align="center">🌟Star this repository🌟</h2>
<p align="center">Created by <a href="https://github.com/Charmve">Charmve</a> & <a href="https://github.com/MaiweiAI">maiwei.ai</a> Community | Deployed on <a href="https://www.kaggle.com/yidazhang07/bridge-cracks-image">Kaggle</a></p>
