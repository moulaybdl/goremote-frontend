"use client";

import { ReactFlow, Background, Controls } from '@xyflow/react';
import { useState } from 'react';

// Custom Central Node Component using as.svg
const CentralNode = () => (
  <div style={{ 
    width: 382, 
    height: 382, 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' 
  }}>
    <svg width="382" height="382" viewBox="0 0 382 382" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1195_366)" filter="url(#filter0_d_1195_366)">
        <g filter="url(#filter1_d_1195_366)">
          <ellipse cx="111.977" cy="167" rx="102.385" ry="43.9777" transform="rotate(90 111.977 167)" fill="#D9D9D9"/>
        </g>
        <g filter="url(#filter2_i_1195_366)">
          <rect x="313" y="45" width="244" height="244" rx="24" transform="rotate(90 313 45)" fill="#161A21" stroke="#242931" strokeWidth="2"/>
        </g>
        <path fillRule="evenodd" clipRule="evenodd" d="M145.135 177.572C144.066 177.169 140.001 174.845 136.1 172.409C136.1 172.409 131.779 169.709 129.01 167.978C148.54 157.61 171.227 136.869 187.617 108.063C189.037 105.566 191.117 102 191.117 102C191.117 102 192.941 105.566 194.2 108.063C199.652 118.881 203.758 125.826 210.746 134.139C214.011 138.025 220.887 144.632 224.432 147.302L226.764 149.055L224.238 149.371C221.431 149.613 218.839 149.462 217.048 148.665C216.408 148.38 213.573 146.207 210.754 143.84C207.931 141.469 204.959 139.292 204.146 138.998C201.971 138.215 198.257 138.388 196.135 139.375C194.996 139.907 192.227 142.278 188.578 145.861C154.669 179.129 156.328 177.567 150.302 178.632C147.933 178.736 146.579 178.112 145.139 177.572H145.135Z" fill="url(#paint0_linear_1195_366)"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M203.608 138.839C203.794 138.886 203.972 138.942 204.137 139.003C204.95 139.297 207.921 141.474 210.744 143.845C213.567 146.217 216.399 148.389 217.038 148.67C218.83 149.466 221.426 149.618 224.228 149.375L226.754 149.06L224.422 147.307C220.873 144.641 214.001 138.029 210.736 134.143C203.749 125.831 199.642 118.881 194.19 108.067C192.931 105.57 191.107 102.005 191.107 102.005C191.107 102.005 189.027 105.575 187.607 108.067C171.222 136.874 148.53 157.61 129 167.983C147.824 170.181 153.685 165.676 164.362 155.23C166.562 153.075 168.465 150.899 170.273 148.83C175.494 142.854 179.93 137.774 188.565 136.692C193.802 136.034 201.528 138.215 203.604 138.843L203.608 138.839Z" fill="url(#paint1_linear_1195_366)"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M236.867 156.428C237.936 156.831 242.001 159.155 245.902 161.591C245.902 161.591 250.223 164.291 252.992 166.022C233.462 176.39 210.775 197.131 194.385 225.937C192.966 228.434 190.885 232 190.885 232C190.885 232 189.061 228.434 187.802 225.937C182.35 215.119 178.244 208.174 171.256 199.861C167.991 195.975 161.115 189.368 157.57 186.698L155.238 184.945L157.764 184.629C160.571 184.387 163.163 184.538 164.954 185.335C165.594 185.62 168.429 187.792 171.248 190.159C174.071 192.531 177.043 194.707 177.856 195.002C180.031 195.785 183.745 195.612 185.867 194.625C187.006 194.093 189.775 191.722 193.424 188.139C227.333 154.871 225.674 156.433 231.7 155.368C234.069 155.264 235.423 155.887 236.863 156.428H236.867Z" fill="url(#paint2_linear_1195_366)"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M178.392 195.166C178.206 195.118 178.029 195.062 177.863 195.002C177.05 194.707 174.079 192.531 171.256 190.159C168.433 187.788 165.601 185.616 164.962 185.335C163.17 184.538 160.574 184.387 157.772 184.629L155.246 184.945L157.578 186.698C161.127 189.363 167.999 195.975 171.264 199.861C178.251 208.174 182.358 215.124 187.81 225.937C189.069 228.434 190.893 232 190.893 232C190.893 232 192.973 228.43 194.393 225.937C210.778 197.131 233.47 176.394 253 166.022C234.176 163.824 228.315 168.328 217.638 178.774C215.438 180.929 213.535 183.106 211.728 185.174C206.507 191.15 202.07 196.231 193.436 197.312C188.198 197.97 180.472 195.789 178.396 195.162L178.392 195.166Z" fill="url(#paint3_linear_1195_366)"/>
      </g>
      <defs>
        <filter id="filter0_d_1195_366" x="0.400002" y="0.400002" width="381.2" height="381.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="24"/>
          <feGaussianBlur stdDeviation="33.8"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1195_366"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1195_366" result="shape"/>
        </filter>
        <filter id="filter1_d_1195_366" x="45.8" y="57.4147" width="132.355" height="249.171" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="15"/>
          <feGaussianBlur stdDeviation="11.1"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.46 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1195_366"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1195_366" result="shape"/>
        </filter>
        <filter id="filter2_i_1195_366" x="68" y="44" width="246" height="247.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="2"/>
          <feGaussianBlur stdDeviation="0.8"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.403922 0 0 0 0 0.403922 0 0 0 0 0.403922 0 0 0 0.38 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1195_366"/>
        </filter>
        <linearGradient id="paint0_linear_1195_366" x1="201.674" y1="120.252" x2="156.234" y2="186.737" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9D4EDD"/>
          <stop offset="0.52" stopColor="#B15AEF"/>
          <stop offset="0.73" stopColor="#C77DFF"/>
          <stop offset="1" stopColor="#CFA1FF"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1195_366" x1="201.673" y1="120.253" x2="156.232" y2="186.738" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFA1FF"/>
          <stop offset="0.27" stopColor="#C77DFF"/>
          <stop offset="0.48" stopColor="#B15AEF"/>
          <stop offset="1" stopColor="#6A25B9"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1195_366" x1="180.328" y1="213.747" x2="225.768" y2="147.263" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6A25B9"/>
          <stop offset="0.52" stopColor="#B15AEF"/>
          <stop offset="0.73" stopColor="#C77DFF"/>
          <stop offset="1" stopColor="#BEA2CD"/>
        </linearGradient>
        <linearGradient id="paint3_linear_1195_366" x1="180.327" y1="213.747" x2="225.768" y2="147.263" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFA1FF"/>
          <stop offset="0.27" stopColor="#C77DFF"/>
          <stop offset="0.48" stopColor="#B15AEF"/>
          <stop offset="1" stopColor="#6A25B9"/>
        </linearGradient>
        <clipPath id="clip0_1195_366">
          <rect width="246" height="246" fill="white" transform="translate(314 44) rotate(90)"/>
        </clipPath>
      </defs>
    </svg>
  </div>
);

// Custom Secondary Node Component using secondary_node.svg
const SecondaryNode = () => (
  <div style={{ 
    width: 174, 
    height: 174, 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' 
  }}>
    <svg width="174" height="174" viewBox="0 0 174 174" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_95_428)">
        <g filter="url(#filter1_ii_95_428)">
          <rect x="24" y="24" width="126" height="126" rx="19" fill="#202020" stroke="#181C21" strokeWidth="12"/>
        </g>
        <g filter="url(#filter2_nf_95_428)">
          <rect x="26.4805" y="25.7095" width="121.81" height="121.81" rx="17" fill="#121417"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_d_95_428" x="0" y="0" width="174" height="174" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="9"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.82 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_95_428"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_95_428" result="shape"/>
        </filter>
        <filter id="filter1_ii_95_428" x="16.8" y="18" width="140.7" height="138" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-3"/>
          <feGaussianBlur stdDeviation="0.6"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0.168627 0 0 0 0 0.196078 0 0 0 0.38 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_95_428"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="2"/>
          <feGaussianBlur stdDeviation="0.75"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.148436 0 0 0 0 0.169644 0 0 0 0 0.196154 0 0 0 1 0"/>
          <feBlend mode="normal" in2="effect1_innerShadow_95_428" result="effect2_innerShadow_95_428"/>
        </filter>
        <filter id="filter2_nf_95_428" x="25.6805" y="24.9095" width="123.41" height="123.41" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feTurbulence type="fractalNoise" baseFrequency="2 2" stitchTiles="stitch" numOctaves="3" result="noise" seed="4431" />
          <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
          <feComponentTransfer in="alphaNoise" result="coloredNoise1">
            <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
          </feComponentTransfer>
          <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
          <feFlood floodColor="rgba(0, 0, 0, 0.14)" result="color1Flood" />
          <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
          <feMerge result="effect1_noise_95_428">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
          </feMerge>
          <feGaussianBlur stdDeviation="0.4" result="effect2_foregroundBlur_95_428"/>
        </filter>
      </defs>
    </svg>
  </div>
);

// Define custom node types
const nodeTypes = {
  centralNode: CentralNode,
  secondaryNode: SecondaryNode,
};


const initialNodes = [
  // Central node
  {
    id: 'central',
    position: { x: 500, y: 300 },
    data: {},
    type: 'centralNode',
  },
  // Left side nodes (3 nodes with random positioning)
  {
    id: 'left1',
    position: { x: 150, y: 120 },
    data: {},
    type: 'secondaryNode',
  },
  {
    id: 'left2',
    position: { x: 80, y: 280 },
    data: {},
    type: 'secondaryNode',
  },
  {
    id: 'left3',
    position: { x: 180, y: 450 },
    data: {},
    type: 'secondaryNode',
  },
  // Right side nodes (3 nodes with random positioning)
  {
    id: 'right1',
    position: { x: 950, y: 150 },
    data: {},
    type: 'secondaryNode',
  },
  {
    id: 'right2',
    position: { x: 1020, y: 320 },
    data: {},
    type: 'secondaryNode',
  },
  {
    id: 'right3',
    position: { x: 880, y: 480 },
    data: {},
    type: 'secondaryNode',
  },
];

const initialEdges = [
  // Left side connections with SmoothStepEdge
  {
    id: 'e-left1-central',
    source: 'left1',
    target: 'central',
    type: 'SmoothStepEdge',
    style: { stroke: '#FFFFFF', strokeWidth: 2 },
  },
  {
    id: 'e-left2-central',
    source: 'left2',
    target: 'central',
    type: 'SmoothStepEdge',
    style: { stroke: '#6b7280', strokeWidth: 2 },
  },
  {
    id: 'e-left3-central',
    source: 'left3',
    target: 'central',
    type: 'SmoothStepEdge',
    style: { stroke: '#6b7280', strokeWidth: 2 },
  },
  // Right side connections with SmoothStepEdge
  {
    id: 'e-right1-central',
    source: 'right1',
    target: 'central',
    type: 'SmoothStepEdge',
    style: { stroke: '#6b7280', strokeWidth: 2 },
  },
  {
    id: 'e-right2-central',
    source: 'right2',
    target: 'central',
    type: 'SmoothStepEdge',
    style: { stroke: '#6b7280', strokeWidth: 2 },
  },
  {
    id: 'e-right3-central',
    source: 'right3',
    target: 'central',
    type: 'SmoothStepEdge',
    style: { stroke: '#6b7280', strokeWidth: 2 },
  },
];

export default function Page() {
  const [nodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);
    return (
        <div className="w-full h-screen">
            <ReactFlow 
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                fitView
                fitViewOptions={{
                    padding: 0.2,
                }}
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    )
}