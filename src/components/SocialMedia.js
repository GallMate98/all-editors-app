import React from 'react'
import Title from './Title'

export default function SocialMedia() {
    return (
        <div className='ml-auto'>
            <Title/>
            <div className='flex flex-auto mb-5 justify-center'>
                <a href="tel:+0772289332">
                    <svg fill="#FFFFFF" width="25px" height="25px" viewBox="0 0 24 24" id="phone" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><path id="primary" d="M21,15v3.93a2,2,0,0,1-2.29,2A18,18,0,0,1,3.14,5.29,2,2,0,0,1,5.13,3H9a1,1,0,0,1,1,.89,10.74,10.74,0,0,0,1,3.78,1,1,0,0,1-.42,1.26l-.86.49a1,1,0,0,0-.33,1.46,14.08,14.08,0,0,0,3.69,3.69,1,1,0,0,0,1.46-.33l.49-.86A1,1,0,0,1,16.33,13a10.74,10.74,0,0,0,3.78,1A1,1,0,0,1,21,15Z"></path></svg>
                </a>
                <a className='ml-4' href="tel:+0772289332">
                
                    <p>+0362 587 669</p>
                </a>
            </div>

            <div className='flex flex-auto mb-5 mt-auto first-line justify-center'>
              <a href="mailto:gallmate98@gmail.com">
              <svg width="25px" height="25px" viewBox="0 -17 178 178" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M176.582 68.1415C176.193 60.8736 175.883 53.4759 175.581 46.3229C175.288 39.3568 174.985 32.1533 174.609 25.0713C174.065 14.7867 168.774 7.29417 159.308 3.40359C155.965 2.0307 151.852 1.30472 146.741 1.18222C133.204 0.860342 119.439 0.711559 106.126 0.56691C101.387 0.515217 96.649 0.46112 91.9115 0.40465C91.7922 0.305737 91.6424 0.251378 91.4875 0.251299H80.4525C71.4852 0.251299 62.5185 0.253954 53.5531 0.258298C51.9122 0.258298 50.266 0.254587 48.6257 0.250025C43.6943 0.233084 38.5944 0.219024 33.5787 0.401468C26.7308 0.649721 21.4578 1.98858 16.9854 4.61576C7.92797 9.93791 3.09649 17.5349 2.62514 27.1972C2.37682 32.2854 2.29317 37.4607 2.21277 42.4661L2.16026 45.6C2.08765 49.801 2.01178 54.001 1.93268 58.2003C1.67788 72.0374 1.414 86.3455 1.30962 100.423C1.26747 106.027 1.55015 112.656 3.96137 119.34C7.52729 129.227 14.1048 135.618 24.07 138.88C33.3414 141.843 43.0098 143.363 52.7388 143.384C76.9223 143.698 102.288 143.846 132.141 143.846H137.94C143.426 143.94 148.903 143.344 154.242 142.073C166.482 138.926 173.735 131.387 175.801 119.662C176.458 115.685 176.914 111.676 177.168 107.652C178.062 95.4416 177.391 83.0674 176.742 71.0991L176.582 68.1415ZM63.4885 132.736C53.0131 132.704 41.8199 132.306 30.9451 129.625C26.5694 128.547 23.4398 127.284 20.9391 125.576L74.9078 75.696L76.4146 77.325C77.9162 78.9494 79.4664 80.6259 81.0322 82.2874C85.5641 87.0981 90.0105 87.4923 95.0223 83.5293C97.073 81.9089 99.0213 80.0753 100.905 78.3082C101.619 77.6371 102.34 76.9614 103.071 76.2889L155.893 129.871C154.067 131.379 151.86 131.695 149.535 132.028L148.867 132.124C146.37 132.458 143.852 132.613 141.332 132.587L126.557 132.641C105.884 132.718 84.5106 132.799 63.4885 132.736ZM145.959 21.38C138.055 28.5507 129.883 35.9648 122.091 43.5212C114.315 51.0613 106.691 58.9635 99.317 66.6077C96.2652 69.7718 93.1142 73.0388 90.0027 76.2264L24.3676 11.5338C24.8374 11.4082 25.3036 11.2814 25.7661 11.1532C27.5555 10.6639 29.2458 10.2004 30.9723 9.85959C39.5572 8.16547 48.3961 8.39587 56.9447 8.62197C58.8541 8.67149 60.7628 8.72049 62.6709 8.75176C65.5742 8.79737 68.5293 8.89466 71.386 8.98914C73.8672 9.07058 76.4327 9.15529 78.9594 9.20546C86.0647 9.34666 93.1699 9.48219 100.276 9.61211C115.635 9.90011 131.517 10.1989 147.134 10.5755C149.33 10.6973 151.513 11.0061 153.657 11.4988C154.499 11.6675 155.373 11.8407 156.24 11.9919V12.0135C152.824 15.1509 149.335 18.3175 145.957 21.3826L145.959 21.38ZM35.4148 100.077C28.8321 106.367 22.0329 112.866 15.4579 119.507C12.7271 113.032 11.3117 107.718 10.8903 102.389C9.72326 87.6069 10.2082 72.8929 10.8086 59.0891C11.0829 52.7942 11.1924 46.3916 11.2988 40.1996C11.3714 35.9904 11.4466 31.6377 11.5724 27.3633C11.702 22.8296 13.2107 19.6483 16.5848 16.8367L67.8693 67.4697C57.429 79.036 46.2384 89.7318 35.411 100.082L35.4148 100.077ZM164.703 118.401C164.463 119.7 164.142 120.982 163.742 122.24C163.598 122.728 163.454 123.217 163.318 123.706L163.112 123.775L108.749 70.5361C127.542 51.0534 145.364 34.4378 163.19 19.7771C163.266 20.1218 163.344 20.4573 163.421 20.7844C163.738 21.9717 163.949 23.1849 164.051 24.4102C164.652 36.7407 165.142 48.9096 165.502 58.1347C165.84 66.7915 166.128 75.3324 166.358 83.5222C166.647 93.8921 166.679 106.148 164.699 118.404L164.703 118.401Z" fill="#000000"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="177" height="144" fill="#FFFFFF" transform="translate(0.777344)"/>
                    </clipPath>
                    </defs>
                    </svg>
                </a>
                <a className='ml-4'href="mailto:gallmate98@gmail.com">
                alleditors@gmail.com
                </a>
            </div>
            <div className='flex flex-auto mb-5 justify-center'>
                <a className='mr-4' href="https://www.facebook.com/">
                    <svg width="30px" height="30px" viewBox="0 0 15 15" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5ZM7.5 14.5V6.5C7.5 5.39543 8.39543 4.5 9.5 4.5H10M5 8.5H10" stroke="#000000"/>
                    </svg>
                </a>
                <a className='mr-4' href="https://twitter.com/">
                    <svg fill="#FFFFFF" width="33px" height="33px" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-twitter-circle">
                        <path d='M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z'/><path d='M15 6.947c-.368.16-.763.27-1.178.318.424-.25.748-.646.902-1.117-.398.231-.836.4-1.304.49A2.06 2.06 0 0 0 11.923 6c-1.133 0-2.051.905-2.051 2.02 0 .158.018.312.053.46a5.854 5.854 0 0 1-4.228-2.11 1.982 1.982 0 0 0-.278 1.015c0 .7.363 1.32.913 1.681a2.076 2.076 0 0 1-.93-.253v.025a2.03 2.03 0 0 0 1.646 1.98 2.108 2.108 0 0 1-.927.034 2.049 2.049 0 0 0 1.916 1.403 4.156 4.156 0 0 1-2.548.864c-.165 0-.328-.01-.489-.028A5.863 5.863 0 0 0 8.144 14c3.774 0 5.837-3.078 5.837-5.748l-.007-.262A4.063 4.063 0 0 0 15 6.947z'/>
                    </svg>
                </a>
                <a className='mr-4' href='https://www.linkedin.com/'>
                
                <svg width="30px" height="30px" viewBox="0 0 24 24" id="meteor-icon-kit__solid-linkedin" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.2857 0H1.70893C0.766071 0 0 0.776786 0 1.73036V22.2696C0 23.2232 0.766071 24 1.70893 24H22.2857C23.2286 24 24 23.2232 24 22.2696V1.73036C24 0.776786 23.2286 0 22.2857 0ZM7.25357 20.5714H3.69643V9.11786H7.25893V20.5714H7.25357ZM5.475 7.55357C4.33393 7.55357 3.4125 6.62679 3.4125 5.49107C3.4125 4.35536 4.33393 3.42857 5.475 3.42857C6.61071 3.42857 7.5375 4.35536 7.5375 5.49107C7.5375 6.63214 6.61607 7.55357 5.475 7.55357ZM20.5875 20.5714H17.0304V15C17.0304 13.6714 17.0036 11.9625 15.1821 11.9625C13.3286 11.9625 13.0446 13.4089 13.0446 14.9036V20.5714H9.4875V9.11786H12.9V10.6821H12.9482C13.425 9.78214 14.5875 8.83393 16.3179 8.83393C19.9179 8.83393 20.5875 11.2071 20.5875 14.2929V20.5714Z" fill="#758CA3"/></svg>
                </a>
            </div>

                            
        </div>)
  }
  