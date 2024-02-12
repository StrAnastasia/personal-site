import { FC } from 'react';
import React from 'react';

export const LacoreLogoIcon: FC<{ width: number; height: number }> = ({
  width,
  height,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='140'
    height='48'
    viewBox='0 0 140 48'
    fill='none'
    style={{ width, height }}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M75.6448 17.8583H72.8606C72.2519 16.9367 71.4702 16.1389 70.5259 15.471C69.5783 14.8069 68.5522 14.2989 67.4388 13.96C66.322 13.6117 65.2081 13.4459 64.104 13.4459C62.7071 13.4459 61.3719 13.7289 60.0954 14.2857C58.8094 14.8458 57.6859 15.6242 56.6991 16.611C55.7222 17.6012 54.9604 18.7275 54.4131 19.988C53.8597 21.2513 53.5828 22.551 53.5828 23.899C53.5828 25.7848 54.0714 27.5529 55.0516 29.1972C56.0285 30.8518 57.341 32.1544 58.9785 33.112C60.6265 34.0757 62.3785 34.5544 64.2411 34.5544C65.3547 34.5544 66.4521 34.3687 67.5367 33.9911C68.6209 33.6101 69.627 33.0694 70.5648 32.3629C71.4963 31.653 72.2908 30.8453 72.9293 29.9401H75.7101C75.0068 31.3174 74.0559 32.542 72.8606 33.6163C71.6621 34.691 70.3175 35.5247 68.8165 36.1109C67.3182 36.7069 65.7879 36.9998 64.241 36.9998C61.8444 36.9998 59.6298 36.4237 57.614 35.2743C55.595 34.1215 54.0027 32.5354 52.834 30.5262C51.6581 28.5138 51.072 26.3089 51.072 23.899C51.072 21.5741 51.6547 19.4245 52.8208 17.4382C53.9834 15.4583 55.5629 13.8854 57.5587 12.7327C59.5517 11.5795 61.714 11.0033 64.0392 11.0033C66.7421 11.0033 69.1647 11.7037 71.2944 13.1036C72.1834 13.677 73.0497 14.3996 73.9027 15.2758C74.7591 16.1582 75.3391 17.0147 75.6448 17.8583ZM46.9136 11.8403H44.0774L43.3216 19.0271H45.5817L46.9136 11.8403ZM19.7324 36.9999L30.534 11.8824H33.3149L44.1066 36.9999H41.3872L37.9745 29.1552L36.4215 25.4394L36.3823 25.3448L31.9571 14.8004L27.0655 26.2731H34.8647L35.8255 28.5819H26.0466L22.448 36.9999H19.7324ZM5 36.9999V11.8824H7.51429V34.6911H17.9019V36.9999H5ZM122.042 36.5249V32.6626H124.555V34.219H135.754V36.5249H122.042ZM122.042 24.9739V22.743H135.412V24.9866H127.369V24.9739H122.042ZM122.042 15.0514V11.4041H135.754V13.7129H124.556V15.0513L122.042 15.0514ZM102.78 14.6407V11.4042H108.752C110.302 11.4042 111.641 11.4789 112.787 11.632C113.926 11.7852 114.959 12.1207 115.877 12.6283C117.167 13.3707 118.137 14.3478 118.811 15.5723C119.482 16.7869 119.818 18.1382 119.818 19.6199C119.818 20.9556 119.482 22.1963 118.824 23.3324C118.16 24.4691 117.261 25.3807 116.124 26.0646C114.992 26.7419 113.757 27.1101 112.422 27.1621L119.482 36.5249H116.359L107.808 25.1203H108.557C108.638 25.1203 108.769 25.1302 108.951 25.1529C109.136 25.1756 109.273 25.1888 109.367 25.1888C111.331 25.1888 112.891 24.9379 114.047 24.4397C115.063 23.9576 115.864 23.2709 116.441 22.3654C117.017 21.4664 117.307 20.4569 117.307 19.3499C117.307 18.8059 117.209 18.2525 117.011 17.6825C116.812 17.1125 116.541 16.5883 116.186 16.1095C115.829 15.6274 115.412 15.2172 114.936 14.875C114.217 14.3608 113.428 14.0351 112.572 13.908C111.709 13.7742 110.618 13.7161 109.299 13.7161H105.287V18.4868C104.643 17.207 103.792 15.6375 102.78 14.6407ZM89.8815 11C92.2128 11 94.4011 11.5766 96.456 12.7261C98.5104 13.8723 100.145 15.4352 101.363 17.4123C102.578 19.3921 103.184 21.5544 103.184 23.8991C103.184 26.2665 102.584 28.4586 101.383 30.4711C100.185 32.4802 98.5596 34.0692 96.5147 35.2418C94.463 36.4105 92.255 37 89.8815 37C88.1616 37 86.5041 36.6715 84.9119 36.0169C83.3172 35.3524 81.8909 34.4308 80.6404 33.2388C79.3898 32.044 78.413 30.6663 77.7031 29.0967C76.9965 27.5303 76.6383 25.8695 76.6383 24.101C76.6383 21.6976 77.2342 19.4965 78.4261 17.4936C79.6176 15.4911 81.2263 13.9083 83.2647 12.7422C85.2994 11.5834 87.5042 11 89.8815 11ZM89.9496 13.4426C88.0151 13.4652 86.2178 13.892 84.5603 14.8524C82.8972 15.8133 81.5847 17.1158 80.6111 18.7573C79.6342 20.3883 79.1521 22.173 79.1521 24.1009C79.1521 25.9735 79.6503 27.7161 80.647 29.3244C81.6466 30.9233 82.9784 32.2032 84.6383 33.1414C86.3024 34.0857 88.0737 34.5546 89.9496 34.5546C91.8873 34.5546 93.678 34.0824 95.3194 33.1249C96.9674 32.1739 98.2666 30.878 99.227 29.2432C100.191 27.6084 100.67 25.8269 100.67 23.8991C100.67 22.476 100.38 21.1281 99.8099 19.835C99.2337 18.5522 98.4486 17.4283 97.459 16.4807C96.4594 15.5265 95.3162 14.7844 94.007 14.2471C92.7012 13.7064 91.3499 13.4426 89.9496 13.4426Z'
      fill='#372D28'
    />
  </svg>
);
