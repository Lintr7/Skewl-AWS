import { Link } from 'react-router-dom';
import './starter-page.css';
import './styles.css';
import './stars.css'
import React, { useEffect } from 'react';

const StarterPage = () => {

  useEffect(() => {
    const stars: NodeListOf<HTMLElement> = document.querySelectorAll('.shooting-star, .shooting-star2');
    const allStars: NodeListOf<HTMLElement> = document.querySelectorAll('.star, .star:before, .star:after');
    const boxes = document.querySelectorAll('.box');

    const scrollArrow = document.querySelector('.scroll-arrow');
    let lastScrollTop = 0;

    // Shooting Stars Animation
    const animateStar = (star: HTMLElement) => {
      const randomDelay = Math.random() * 4 + 1.5;
      star.style.animation = 'none';
      star.offsetHeight; // Force reflow
      star.style.animationDelay = `${randomDelay}s`;
      star.style.animation = `shooting-str 2s forwards`;
      star.style.right = `${Math.random() * 100 - 20}em`;
    };

    stars.forEach((star) => {
      setTimeout(() => {
        animateStar(star);
      }, Math.random() * 4000 + 500);

      star.addEventListener('animationend', () => {
        animateStar(star);
      });
    });

    // Twinkling Stars Animation
    allStars.forEach((star) => {
      if (star instanceof HTMLElement) {
        const randomDuration = (Math.random() * 2 + 1).toFixed(2) + 's';
        const randomDelay = (Math.random() * 1 + 1).toFixed(2) + 's';
        star.style.animationDuration = randomDuration;
        star.style.animationDelay = randomDelay;
      }
    });

    // Scroll-triggered Visibility
    const checkBoxes = () => {
      const triggerBottom = (window.innerHeight / 5) * 4;

      boxes.forEach((box) => {
        if (box instanceof HTMLElement) {
          const boxTop = box.getBoundingClientRect().top;
          if (boxTop < triggerBottom) {
            box.classList.add('visible');
          } else {
            box.classList.remove('visible');
          }
        }
      });
    };

    checkBoxes();
    window.addEventListener('scroll', checkBoxes);

    // Scroll Arrow Visibility
    const handleScrollArrow = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollArrow instanceof HTMLElement) {
        if (scrollTop > lastScrollTop && scrollTop > 700) {
          scrollArrow.style.opacity = '0';
        } else if (scrollTop < lastScrollTop) {
          scrollArrow.style.opacity = '1';
        }
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScrollArrow);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', checkBoxes);
      window.removeEventListener('scroll', handleScrollArrow);
    };
  }, []);

  useEffect(() => {
    const lampSwitch = document.getElementById('lampSwitch');
    const lampButton = document.getElementById('lampButton');
    const container2 = document.querySelector('.container2');
    const mountains = document.querySelector('.mountains');
    const stars = document.querySelectorAll('.star');
    const shootingStars = document.querySelectorAll('.shooting-star, .shooting-star2, .moon');
    const ball = document.querySelector('.ball');

    if (lampButton instanceof HTMLElement && lampSwitch instanceof HTMLInputElement) {
      const toggleLamp = () => {
        // Update button text
        lampButton.textContent = lampSwitch.checked ? 'OFF' : 'ON';
    
        // Night mode (lampSwitch.checked is true)
        if (lampSwitch.checked) {
          if (container2 instanceof HTMLElement) {
            container2.style.background = 'linear-gradient(to bottom, rgb(0, 0, 17), #135385, #2ca1fa)';
          }
          if (mountains instanceof HTMLElement) {
            mountains.style.setProperty('--mountain-color', '#015088');
            mountains.style.setProperty('--mountain-before-color', '#015088');
            mountains.style.setProperty('--mountain-after-color', '#015088');
          }
    
          stars.forEach((star) => {
            if (star instanceof HTMLElement) {
              star.classList.add('show');
            }
          });
    
          shootingStars.forEach((star) => {
            if (star instanceof HTMLElement) {
              star.classList.add('show');
            }
          });
    
          if (ball instanceof HTMLElement) {
            ball.style.display = 'none';
          }
        } 
        // Day mode (lampSwitch.checked is false)
        else {
          if (container2 instanceof HTMLElement) {
            container2.style.background = 'linear-gradient(#750050, #b10042, #da4837, #f7bb38)';
          }
          if (mountains instanceof HTMLElement) {
            mountains.style.setProperty('--mountain-color', '#ff8c00');
            mountains.style.setProperty('--mountain-before-color', '#ff8c00');
            mountains.style.setProperty('--mountain-after-color', '#ff8c00');
          }
    
          stars.forEach((star) => {
            if (star instanceof HTMLElement) {
              star.classList.remove('show');
            }
          });
    
          shootingStars.forEach((star) => {
            if (star instanceof HTMLElement) {
              star.classList.remove('show');
            }
          });
    
          if (ball instanceof HTMLElement) {
            ball.style.display = 'block';
          }
        }
      };
    
      // Synchronize lampButton text on initial load
      lampButton.textContent = lampSwitch.checked ? 'OFF' : 'ON';
    
      // Add event listeners
      lampSwitch.addEventListener('change', toggleLamp);
      lampButton.addEventListener('click', () => {
        lampSwitch.checked = !lampSwitch.checked; // Toggle the switch state
        lampSwitch.dispatchEvent(new Event('change')); // Trigger the toggleLamp function
      });
    
      // Cleanup function for event listeners
      return () => {
        lampSwitch.removeEventListener('change', toggleLamp);
        lampButton.removeEventListener('click', toggleLamp);
      };
    }
  }, []);

  return (
    <div>
      {/* Box 1 */}
      <div className="box box1">
        <div className="lightTot">
          <div className="light-bulb">
            <div className="bulb">
              <div className="coil"></div>
              <div className="coil"></div>
              <div className="coil"></div>
            </div>
            <div className="base"></div>
          </div>
        </div>
        <h2 className="title">What is Skewl?</h2>
        <p className="description">
          Skewl is the ultimate all-in-one student productivity workspace. Many students struggle with distractions in their environment, but with Skewl, they can stay focused. Accessible on any device, Skewl provides all the tools students need to complete their work efficiently and stay on track.
        </p>
      </div>

      {/* Box 2 */}
      <div className="box box2">
        <div className="mover">
          <div className="rocket">
            <div className="window"></div>
          </div>
        </div>
        <h2 className="title2">Introducing Skewl Tools!</h2>
        <ul className="description2">
          <li className="description2">To-do List</li>
          <li className="description2">Flashcard Maker</li>
          <li className="description2">Drawing Board</li>
          <li className="description2">Calendar</li>
          <li className="description2">Calculator</li>
          <li className="description2">Timer</li>
          <li className="description2">Progress Tracker</li>
        </ul>
      </div>

      {/* Box 3 */}
      <div className="box box3">
        <div className="containerCat">
          <div className="cat">
            <div className="face">
              <div className="ear-1">
                <div className="inner-1"></div>
              </div>
              <div className="ear-r">
                <div className="inner-2"></div>
              </div>
              <div className="eye-1">
                <div className="eyeball"></div>
              </div>
              <div className="eye-r">
                <div className="eyeball"></div>
              </div>
              <div className="nose">
                <div className="l1"></div>
                <div className="l2"></div>
              </div>
              <div className="circle"></div> {/* The transparent glass */}
              <div className="circle-border"></div>
            </div>
            <div className="body">
              <div className="paw-1"></div>
              <div className="paw-2"></div>
              <div className="tail"></div>
            </div>
          </div>
        </div>
        <h2 className="title3">Apollo the Space Cat</h2>
        <p className="description3">Apollo is your personal AI Chatbot. He's always ready to answer any of your questions!</p>
      </div>

      {/* Container 2 */}
      <div className="container2">
        <h1 className="ratio">Skewl.</h1>
        <h1 className="tag">The Student Productivity Workspace</h1>

        <Link to="/app">
          <button className="button2">Login</button>
        </Link>

        {/* Stars */}
        {[...Array(64)].map((_, index) => (
          <div className={`star star-${index + 1}`} key={index}></div>
        ))}

        <div className="moon"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star2"></div>

        <div className="mountains"></div>
        <div className="whole">
          <div className="land">
            <div className="windmill">
              <div className="light"></div>
              <div className="blades"></div>
            </div>
            <div className="tree"></div>
            <div className="tree1"></div>
          </div>
        </div>
      </div>

      <div className="ball"></div>

      {/* Scroll Arrow */}
      <div className="scroll-arrow">
        <div className="arrow"></div>
      </div>

      {/* Lamp Container */}
      <div className="container">
        <div className="lamp"></div>
        <input type="checkbox" id="lampSwitch" />
        <button className="lamp-button" id="lampButton">ON</button>
      </div>

    </div>
  );
};

export default StarterPage;
