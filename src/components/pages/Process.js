import React from 'react';
import '../../App.css';
import './Process.css';

export default function Process() {
    return (
    <>
    <div className="process-component">
        <section class="working-process-area" id="process">
            <div class="container">
                <div class="sec-title text-center">
                    <p>To Do Good Design</p>
                    <div class="title">Our Working <span>process</span></div>
                </div>
            </div>
        </section>
      <main class="card">
        <div class="card-item sedans">
           <h2 class="card--title">1.Concept</h2>
           <p class="card--text">With righteous indignation and works off beguiled demoralized charm.</p>
        </div>

    <div class="card-item suvs">
      <h2 class="card--title">2.Idea</h2>
      <p class="card--text">With righteous indignation and works off beguiled demoralized charm.</p>
      
    </div>
    <div class="card-item luxury">
      <h2 class="card--title">3.Specifications</h2>
      <p class="card--text">Our power of choice is untrammelled and when nothing prevents.</p>
      
    </div>
    <div class="card-item exec">
      <h2 class="card--title">4.Execution</h2>
      <p class="card--text">Wing to the claims of duty the obligations will frequently occur.</p>
      <span class='icon-kitchen'></span>
      
    </div>
  </main>
  </div>
    </>
    
    );
}
