import * as React from "react";

export const Bat = ({
  foregroundColor = "#fff",
  backgroundColor = "white",
  size = 200,
  stroke
}) => (
  <svg width={size} name="Bat" value="Bat" viewBox="0 0 512 512">
    <path d="M0 0h512v512H0z" fill={backgroundColor} fillOpacity="0`" />
    <g transform="translate(0,0)">
      <path
        name="Bat"
        d="M196.14 78.192c-11.98 26.54-14.398 45.97-11.355 59.664 3.357 15.106 12.85 24.708 27.24 31.903l11.168 5.583-8.83 8.828c-.94.942-2.235 4.514-1.224 10.9 1.01 6.39 4.1 14.61 8.626 22.335 5.75 9.82 13.835 18.326 21.62 23.235L256 221.77l12.52 18.926c7.814-4.9 15.94-13.433 21.714-23.29 4.526-7.727 7.617-15.947 8.627-22.335 1.012-6.386-.282-9.958-1.223-10.9l-8.83-8.827 11.168-5.584c14.39-7.196 23.883-16.798 27.24-31.904 3.043-13.694.626-33.125-11.354-59.664-25.09 13.792-37.177 28.03-51.32 70.46L256 174.27l-8.54-25.617c-14.143-42.43-26.23-56.67-51.32-70.46zM96 97.808c-3.376 19.912-5.288 41.53 10.314 58.623C53.46 233.354 16 377.273 16 433.81c5.024-10.05 13.206-23.25 23.055-35.647 1.14-66.82 33.374-161.227 81.228-240.983l4.63-7.717 7.718 4.63c20.08 12.047 41.164 20.96 62.73 26.745-7.74-5.074-14.54-11.42-19.673-19.15-17.93-7.796-34.227-18.417-47.687-31.877-18.968-1.448-25.344-16.872-32-32zm320 0c-6.656 15.128-13.032 30.552-32 32-13.46 13.46-29.756 24.08-47.688 31.877-5.133 7.73-11.93 14.076-19.673 19.15 21.566-5.785 42.65-14.698 62.73-26.744l7.718-4.63 4.63 7.717c47.853 79.756 80.088 174.163 81.227 240.984 9.85 12.397 18.03 25.6 23.055 35.648 0-56.536-37.46-200.455-90.314-277.377 15.602-17.093 13.69-38.71 10.314-58.622zm-192 80c11.588 8.65 18.698 11.698 32 16 13.302-4.302 20.412-7.35 32-16 2.458 4.566 0 16 0 16-11.948 5.447-21.853 2.208-32 0-10.147 2.208-20.052 5.447-32 0 0 0-2.458-11.434 0-16zm-71.854 6.525c1.817 4.383 3.522 9.017 5.143 13.88 5.98 17.942 10.558 38.886 13.62 60.32 5.243 36.7 6.394 74.3.945 101.388 8.74-.234 17.477 2.767 26.21 8.274L166.41 392.56l20.268-4.795-8.55 33.595L208 403.77l1.057 20.8 13.615-34.794c.632.695 1.264 1.432 1.896 2.145-4.088-5.556-7.65-12.068-10.78-19.37-9.34-21.792-14.788-50.772-14.788-82.742 0-22.842 2.793-44.14 7.787-62.397-.18-.302-.375-.603-.553-.907-5.21-8.898-9-18.256-10.636-27.26-14.738-3.625-29.273-8.592-43.452-14.91zm207.708 0c-14.18 6.318-28.714 11.285-43.452 14.91-1.637 9.004-5.425 18.362-10.636 27.26-.178.304-.372.605-.553.908C310.207 245.67 313 266.967 313 289.81c0 31.97-5.448 60.95-14.787 82.742-2.734 6.378-5.807 12.136-9.262 17.2.085-.095.17-.198.253-.292l13.74 35.11L304 403.772l29.87 17.59-8.548-33.595 20.268 4.795-32.195-24.782c8.94-5.75 17.842-8.698 26.73-7.957-5.425-27.08-4.27-64.633.965-101.286 3.062-21.435 7.64-42.38 13.62-60.322 1.622-4.862 3.327-9.496 5.144-13.88zm-227.268.64c-12.714 64.79-23.21 127.977-15.46 180.256 12.15-9.62 24.292-10.477 36.362-5.83 4.968-22.784 4.842-61.64-.398-98.32-2.938-20.563-7.36-40.62-12.88-57.177-2.344-7.035-4.942-13.425-7.624-18.93zm246.828 0c-2.682 5.505-5.28 11.895-7.625 18.93-5.52 16.557-9.942 36.614-12.88 57.178-5.19 36.34-5.364 74.816-.537 97.683 12.897-3.96 24.765-2.81 36.5 6.468 7.75-52.28-2.745-115.467-15.46-180.256zm-271.6 33.74c-26.35 55.316-44.32 113.17-49.365 158.712 13.07-11.5 27.16-18.727 39.995-15.59-5.553-44.21.388-93.13 9.368-143.123zm296.374 0c8.98 49.993 14.92 98.912 9.367 143.122 12.835-3.137 26.925 4.09 39.996 15.59-5.044-45.542-23.014-103.396-49.363-158.713zm-183.22 27.466c-2.517 13.256-3.968 28.045-3.968 43.628 0 6.126.233 12.123.656 17.963 1.642 22.645 6.29 42.786 12.676 57.688 4.017 9.372 8.73 16.627 13.307 21.143 4.575 4.517 8.57 6.208 12.36 6.208 3.79 0 7.785-1.69 12.36-6.207 4.577-4.515 9.29-11.77 13.308-21.142 6.386-14.902 11.034-35.043 12.676-57.687.423-5.84.656-11.836.656-17.962 0-15.583-1.45-30.372-3.97-43.63-9.624 9.87-21.444 16.92-35.03 16.92-13.586 0-25.406-7.05-35.03-16.92zm9.805 153.007c8.413 10.265 16.82 22.012 25.227 34.62 8.136-12.204 16.2-23.596 24.207-33.636-6.772 6.394-15.1 10.638-24.207 10.638-9.465 0-18.096-4.578-25.006-11.397-.074-.072-.147-.15-.22-.223z"
        fill={foregroundColor}
        stroke={stroke}
        fillOpacity="1"
        strokeOpacity="1"
        strokeWidth="8"
      />
    </g>
  </svg>
);

export const Cat = ({
  foregroundColor = "#fff",
  backgroundColor = null,
  size = 200,
  stroke
}) => (
  <svg width={size} viewBox="0 0 512 512">
    <path d="M0 0h512v512H0z" fill={backgroundColor} fillOpacity="0" />
    <g transform="translate(0,0)">
      <path
        d="M463.46 37.008l-30.694 50.738-7.043-2.28c-27.146-8.797-71.525-7.15-97.6.11L321.22 87.5l-28.68-48.543c-33.63 69.254-32.264 117.56-14.79 148.574 18.71 33.208 57.378 49.09 99.117 48.574 48.743-.606 88.968-19.665 107.035-54.194 16.918-32.332 15.684-80.456-20.443-144.902zM323.935 137.594c18.45.1 29.36 15.338 31.462 36.644-37.11 17.91-53.963 3.398-61.173-26.545 11.382-7.063 21.324-10.144 29.71-10.1zm109.26 0c8.385-.045 18.328 3.036 29.71 10.1-7.21 29.942-24.064 44.454-61.174 26.544 2.104-21.306 13.014-36.545 31.463-36.644zm-293.553 50.96c-1.226-.01-2.446-.003-3.66.018-30.175.536-56.142 10.59-75.743 26.574-43.444 35.43-57.27 100.752-12.824 166.192 20.293 33.995 44.432 54.24 70.797 64.187 32.85 12.395 66.655 8.823 99.94 4.114 33.284-4.71 65.854-10.63 96.896-8.42 31.04 2.212 62.09 10.18 90.505 41.165 19.374 21.125 46.887-1.627 23.82-24.156-35.024-34.207-72.527-47.42-109.377-50.04-36.85-2.62-72.2 4.698-104.207 9.228-32.007 4.53-60.272 6.552-84.558-2.61-14.39-5.43-28.308-14.802-41.55-31.142h351.744c13.673-52.293 14.867-106.368 1.873-142.072-19.765 8.49-42.412 12.9-66.2 13.197h-.002c-29.85.37-59.458-6.925-82.907-22.823-4.647 3.012-9.407 6.23-14.292 9.685l-5.734 4.057-5.49-4.382c-46.63-37.2-91.028-52.48-129.03-52.773z"
        fill={foregroundColor}
        fillOpacity="1"
        stroke={stroke}
        strokeOpacity="1"
        strokeWidth="8"
      />
    </g>
  </svg>
);
export const Scarab = ({
  foregroundColor = "#fff",
  backgroundColor = null,
  size = 200,
  stroke
}) => (
  <svg width={size} viewBox="0 0 512 512">
    <path d="M0 0h512v512H0z" fill={backgroundColor} fillOpacity="0" />
    <g transform="translate(0,0)">
      <path
        d="M211.375 16.85c-23.61 23.413-25.858 60.333-6.746 86.322 3.767-5.196 8.21-9.834 13.184-13.78-11.825-18.498-9.592-43.096 6.72-59.273l-13.16-13.27zm94.705 0l-13.158 13.27c16.353 16.215 18.555 40.89 6.633 59.403 4.947 3.986 9.356 8.665 13.08 13.907 19.317-26.003 17.134-63.09-6.555-86.58zm-47.365 76.822c-26.81.002-49.127 22.936-49.127 51.996 0 .572.277 2.22.488 4.746l.045.53c13.05 5.81 29.927 9.52 47.06 9.88 17.555.37 35.25-2.72 49.56-9.28l.096-1.136c.213-2.527.488-4.144.488-4.74 0-29.156-21.795-51.994-48.605-51.996h-.005zm-125.97 12.11C89.104 131.18 59.02 176.25 59.02 257.987v9.344h76.572c2.31-6.463 5.042-12.702 8.158-18.69H77.904c2.018-70.906 26.967-105.015 64.24-126.704l-9.398-16.153zm252.18 0l-9.4 16.154c37.274 21.69 62.224 55.798 64.243 126.705h-66.082c3.115 5.988 5.848 12.227 8.16 18.69h76.808v-9.344c0-81.736-30.085-126.807-73.728-152.203zm-190.302 58.35c-22.655 11.32-35.68 27.848-35.68 44.534 0 8.485 2.916 16.418 8.948 24.04l3.665 4.632c25.47 13.425 56.948 21.68 88.804 27.752 29.126-3.376 57.303-15.203 86-28.36l3.185-4.025c6.033-7.622 8.945-15.553 8.945-24.04 0-16.67-13.054-33.065-35.728-44.358-19.17 11.306-42.908 15.686-65.975 15.2-22.74-.477-44.964-5.612-62.164-15.374zm160.445 89.173c-27.678 12.757-56.164 25.115-87.045 29.67v161.83c57.948-5.264 104.043-59.22 104.043-125.618 0-24.385-6.208-46.76-16.998-65.882zm-192.843.252c-10.702 19.068-16.858 41.352-16.858 65.63 0 66.37 46.056 120.307 103.97 125.61V282.002c-30.427-6.124-60.91-14.45-87.112-28.445zM35.568 292.09v9.344c0 55.27 14.616 114.355 47.99 159.775l15.06-11.067c-28.5-38.785-42.464-90.177-44.046-139.366h72.352c.337-6.353 1.033-12.594 2.105-18.687H35.567zm352.836 0c1.073 6.093 1.77 12.334 2.106 18.687h71.33c-1.582 49.19-15.546 100.58-44.045 139.366l15.06 11.066c33.373-45.42 47.99-104.505 47.99-159.776v-9.344h-92.44zM87.03 337.988v9.344c0 34.454 16.72 67.14 40.255 92.555 23.536 25.414 54.022 43.91 84.088 49.18l3.225-18.41c-24.705-4.328-52.526-20.71-73.602-43.47-18.76-20.257-32.003-45.286-34.703-70.51h24.904c-1.495-6.09-2.638-12.327-3.398-18.69H87.03zm302.605 0c-.76 6.362-1.904 12.6-3.4 18.688h25.144c-2.7 25.225-15.946 50.254-34.706 70.512-21.076 22.758-48.897 39.14-73.602 43.47l3.227 18.408c30.065-5.268 60.55-23.765 84.087-49.18 23.536-25.414 40.254-58.1 40.254-92.554v-9.344h-41.005z"
        fill={foregroundColor}
        fillOpacity="1"
        stroke={stroke}
        strokeOpacity="1"
        strokeWidth="8"
      />
    </g>
  </svg>
);
export const Eagle = ({
  foregroundColor = "#fff",
  backgroundColor = null,
  size = 200,
  stroke
}) => (
  <svg width={size} viewBox="0 0 512 512">
    <path d="M0 0h512v512H0z" fill={backgroundColor} fillOpacity="0" />
    <g transform="translate(0,0)">
      <path
        d="M43.66 18.375l77.942 83.28-103.56-52.25v20.933l110.624 55.814-110.623-18.687v18.955l104.29 17.615-104.29 12.373v18.82L126.19 162.4 18.042 204.95v20.083l113.16-44.525L19.496 256.43l-1.453-.793v21.217c65.806 34.34 132.51 46.543 179.203 32.154 3.824 12.527 9.197 23.717 15.95 33.09l-98.87 151.527h22.315l86.89-133.172-51.378 133.172h20.032l47.38-122.8-16.668 122.8h18.86l16.707-123.1 16.707 123.1h18.857l-16.666-122.8 47.38 122.8h20.033L293.527 360.8l86.666 132.825h22.313l-98.83-151.47c6.884-9.366 12.474-20.595 16.433-33.208 45.343 13.82 109.376 2.79 173.2-29.29v-24.466L383.425 180.51l109.887 43.236v-20.082l-104.87-41.264 104.87 12.442v-18.82l-101.013-11.985 101.014-17.062V108.02l-104.84 17.71 104.84-52.664V52.152L388.42 104.838l80.92-86.463h-25.596l-87.07 93.033 10.346 9.684 1.197 3.215c2.333 6.264 3.502 11.874 3.502 18.347 0 27.94-22.42 53.896-57.76 67.795-14.693-15.965-20.836-32.194-19.682-40.395.63-4.474 2.12-6.77 6.56-8.858 4.442-2.087 12.65-3.236 24.878-1.088l10.978 1.93-.014-11.147c-.03-20-4.383-35.828-14.752-46.682-10.37-10.852-25.516-15.307-43.395-15.79h-.005c-21.498-.587-47.89 4.298-80.78 12.54l-12.01 3.01 6.185 10.72c17.82 30.892 20.35 45.607 18.635 57.835-1.41 10.04-6.747 20.57-11.127 36.323-33.276-14.21-54.31-39.248-54.31-66.194 0-5.457 1.75-11.222 4.128-17.884l2.77-7.768c4.31-5.594 3.082-4.444 4.31-5.594l-87.07-93.033zm231.328 88.69c1.032-.002 2.043.01 3.03.037h.004c15.15.41 24.503 3.856 30.39 10.02 4.566 4.78 7.734 12.16 8.965 23.27-9.47-.514-17.64.672-24.49 3.89-7.2 3.385-12.52 9.362-15.278 16.282-8.773-10.16-11.91-19.657-13.213-30.957-30.474 13.652-38.452-12.414-13.153-20.542 8.877-1.28 16.82-1.978 23.744-2zm.412 64.958c-.395 14.73 6.987 30.445 19.77 45.592-27.713 8.296-55.653 9.176-78.88.162 3.84-15.15 9.727-25.68 12.27-39.562 12.53 3.915 33.24 3.23 46.84-6.192zm-131.336 22.34L77.098 281.68c-12.686-4.224-25.63-9.41-38.614-15.56zm226.5 0L477.04 266.73c-13.155 6.165-26.255 11.33-39.08 15.508zm-213.287 13.48l-29.925 85.85c-9.986-1.393-20.393-3.487-31.086-6.298zm200.077.005l61.345 79.988c-10.8 2.753-21.3 4.773-31.35 6.066zm-185.18 14.04l-1.494 73.176c-7.553.735-15.648.887-24.176.463zm170.28 0l25.67 73.637c-8.555.31-16.65.02-24.183-.857zm-151.665 3.776c3.903 1.71 7.927 3.273 12.052 4.678l5.54 1.887-1.448 53.043-7.024 2.942c-3.268 1.368-6.77 2.548-10.473 3.547zm133.07 1.133l1.312 64.123c-2.69-.806-5.263-1.713-7.71-2.723L307.288 284c-3.073-.493 1.872-51.797 1.872-51.797l5.438-1.87c3.153-1.083 6.238-2.27 9.26-3.536z"
        fill={foregroundColor}
        fillOpacity="1"
        stroke={stroke}
        strokeOpacity="1"
        strokeWidth="8"
      />
    </g>
  </svg>
);

export const Elephant = ({
  foregroundColor = "#fff",
  backgroundColor = null,
  size = 200,
  stroke
}) => (
  <svg width={size} viewBox="0 0 512 512">
    <path d="M0 0h512v512H0z" fill={backgroundColor} fillOpacity="0" />
    <g transform="translate(0,0)">
      <path
        d="M137.057 36.698c-2.614 0-5.23.162-7.827.52-25.68 3.542-67.16 25.9-97.54 52.824 10.785-5.202 24.81-11.394 39.464-16.28 13.623-4.54 27.76-8.077 41.006-8.306 1.893-.033 3.767.002 5.62.11 7.407.437 14.596 2.11 20.863 5.99 1.865 1.154 3.62 2.523 5.234 4.074 6.646-10.978 14.16-22.022 23.152-33.076-7.964-2.88-17.548-5.41-27.362-5.803-.87-.034-1.74-.052-2.61-.052zm237.886 0c-.87 0-1.742.018-2.61.053-9.815.395-19.4 2.925-27.362 5.804 8.993 11.054 16.507 22.098 23.153 33.076 1.615-1.55 3.37-2.92 5.234-4.074 6.267-3.88 13.456-5.553 20.864-5.99 1.853-.108 3.727-.143 5.62-.11 13.246.23 27.383 3.766 41.006 8.307 14.655 4.885 28.68 11.077 39.465 16.28-30.38-26.925-71.86-49.283-97.54-52.825-2.596-.358-5.213-.52-7.827-.52zm-179.45 1.02c-28.343 29.284-43.33 58.435-58.462 88.687.01 8.366.11 22.473 1.9 36.78 1.905 15.244 6.6 29.882 11.412 34.722l24.36 22.395H185v58.437l17.742 8.87 3.963-11.888-7.53-37.655 17.65-3.53 15.415 77.077c5.957 4.855 14.755 7.688 23.76 7.688s17.803-2.833 23.76-7.688l15.414-77.078 17.652 3.53-7.53 37.656 3.962 11.888L327 278.74V220.3h12.273l22.364-22.364c4.818-4.818 9.525-19.486 11.433-34.753 1.79-14.307 1.89-28.414 1.9-36.78-15.11-30.204-30.076-59.31-58.33-88.55-44.585 6.62-77.05 5.087-121.148-.137zm16.532 30.533c29.854 14.928 58.096 14.928 87.95 0l8.05 16.103c-34.146 17.073-69.904 17.073-104.05 0l8.05-16.102zM114.67 83.463c-10.478-.157-24.295 2.87-37.824 7.38-20.06 6.686-39.25 16.184-49.223 21.42.863 2.71 1.833 5.585 2.973 8.682C36.2 136.18 44.9 155.478 54.386 174.24c9.488 18.764 19.8 37.067 28.524 50.38 4.362 6.657 8.365 12.083 11.387 15.483.827.93 1.26 1.252 1.887 1.843 21.254-11.455 29.27-22.205 38.695-34.36-8.99-11.137-11.9-26.9-13.81-42.167C118.98 148.685 119 132.3 119 124.3v-2.125l.95-1.9c4.604-9.21 9.277-18.53 14.362-27.915-1.285-2.52-2.94-4.14-5.142-5.502-2.92-1.808-7.107-3.01-12.45-3.324-.667-.04-1.352-.064-2.05-.074zm282.66 0c-.698.01-1.383.035-2.05.074-5.343.314-9.53 1.516-12.45 3.324-2.2 1.363-3.857 2.982-5.142 5.502 5.085 9.386 9.758 18.704 14.363 27.914l.95 1.9v2.126c0 8 .02 24.384-2.07 41.117-1.91 15.266-4.82 31.03-13.81 42.167 9.425 12.154 17.442 22.904 38.696 34.36.626-.592 1.06-.914 1.887-1.844 3.022-3.4 7.025-8.826 11.387-15.483 8.723-13.313 19.036-31.616 28.523-50.38 9.488-18.762 18.186-38.06 23.79-53.296 1.14-3.097 2.11-5.973 2.974-8.683-9.974-5.234-29.162-14.732-49.223-21.42-13.53-4.51-27.346-7.535-37.824-7.378zm-203.68 54.695c3.49.06 6.937.312 10.287.727 8.934 1.105 17.267 3.408 24.286 6.838 7.02 3.43 13.198 7.86 16.138 15.252l-9.405 3.744c.567 5.67 1.005 11.785 1.188 17.922.375 12.586.037 24.885-3.723 34.84l-16.84-6.358c1.873-4.96 2.914-16.396 2.57-27.947-.237-7.954-.968-16.098-1.824-22.973-4.19-1.547-9.244-2.793-14.6-3.455-14.394-1.78-30.602.868-40.052 8.54l-11.348-13.972c11.352-9.216 25.78-12.845 39.824-13.15 1.17-.025 2.337-.027 3.5-.008zm124.7 0c1.163-.02 2.33-.017 3.5.008 14.043.305 28.472 3.934 39.824 13.15l-11.348 13.973c-9.45-7.673-25.658-10.32-40.053-8.54-5.355.662-10.41 1.907-14.6 3.454-.855 6.875-1.586 15.02-1.823 22.973-.345 11.55.697 22.987 2.57 27.947l-16.84 6.36c-3.76-9.957-4.098-22.255-3.723-34.842.183-6.137.62-12.25 1.188-17.922l-9.406-3.744c2.94-7.39 9.118-11.822 16.137-15.252 7.02-3.43 15.352-5.733 24.285-6.838 3.35-.414 6.8-.668 10.288-.727zm-140.582 27.32c9.89 1.982 19.044 2.465 27.94.122l4.585 17.405c-12.44 3.277-24.618 2.413-36.06.12l3.535-17.647zm156.464 0l3.536 17.65c-11.443 2.29-23.622 3.155-36.06-.122l4.585-17.406c8.895 2.342 18.05 1.86 27.94-.122zM149.484 221.57c-3.926 18.077-11.744 56.325-12.488 79.027-.338 10.32.083 22.752.97 36.025 9.928-15.62 19.44-33.406 29.034-54.307V237.67l-17.516-16.1zm210.11 3.865L345 240.028v42.285c9.74 21.218 19.397 39.22 29.49 55.01.838-13.487 1.126-26.103.526-36.502-1.178-20.39-9.878-54.958-15.422-75.385zM180.12 296.427c-27.3 57.515-55.76 93.404-93.753 125.43 25.12.802 41.352-8.37 56.606-25.72 17.816-20.268 33.22-52.94 52.918-91.825l-15.77-7.885zm151.76 0l-15.77 7.885c19.696 38.886 35.1 71.557 52.917 91.824 15.254 17.352 31.487 26.523 56.606 25.72-37.994-32.025-66.454-67.914-93.754-125.43zm-118.06 14.87l-.564 1.696-1.266-.633c-19.548 38.716-34.844 72.163-55.5 95.66-3.083 3.508-6.326 6.758-9.728 9.75 2.473 17.93 4.636 31.68 5.355 36.155 17.846 7.732 41.202 10.51 62.938 8.283-.035-.626-.055-1.26-.055-1.906v-143.11l-1.18-5.894zm84.36 0l-1.18 5.895v143.11c0 .645-.02 1.28-.055 1.906 21.757 2.23 45.136-.556 62.99-8.305.75-4.39 3.04-18.03 5.626-35.853-3.52-3.068-6.87-6.412-10.05-10.03-20.656-23.497-35.952-56.944-55.5-95.66l-1.266.633-.564-1.695zM233 332.854v11.363c5.93 4.487 14.373 7.086 23 7.086s17.07-2.6 23-7.086v-11.363c-7.23 3.03-15.153 4.45-23 4.45-7.847 0-15.77-1.42-23-4.45zm0 32v11.363c5.93 4.487 14.373 7.086 23 7.086s17.07-2.6 23-7.086v-11.363c-7.23 3.03-15.153 4.45-23 4.45-7.847 0-15.77-1.42-23-4.45zm0 32v63.45c0 20 46 20 46 0v-63.45c-7.23 3.03-15.153 4.45-23 4.45-7.847 0-15.77-1.42-23-4.45z"
        fill={foregroundColor}
        fillOpacity="1"
        stroke={stroke}
        strokeOpacity="1"
        strokeWidth="8"
      />
    </g>
  </svg>
);

export const Tiger = ({
  foregroundColor = "#fff",
  backgroundColor = null,
  size = 200,
  stroke
}) => (
  <svg width={size} viewBox="0 0 512 512">
    <path d="M0 0h512v512H0z" fill={backgroundColor} fillOpacity="0" />
    <g transform="translate(0,0)">
      <path
        d="M425.479 25.666c.695.03 1.233.235 1.6.637 28.156 30.856 23.75 58.537 18.36 87.437-2.37 4.836-4.483 8.801-6.79 12.07-5.074 7.188-11.345 12.477-26.674 20.141l8.05 16.098c16.671-8.336 26.4-16.047 33.327-25.86a76.374 76.374 0 0 0 1.99-2.98c23.481 29.638 37.639 65.615 40.162 105.69-10.473-11.076-20.322-14.383-32.865-16.864-3.655-17.373-11.07-34.942-23.44-51.433l-14.398 10.796c22.344 29.793 25.952 62.948 20.375 90.836-5.578 27.889-21.494 49.864-33.201 55.717-17.61 8.805-30.338 21.686-40.338 31.686-5 5-9.353 9.287-12.854 11.965-.175.133-.333.24-.502.365-.852-4.857-2.097-9.886-3.67-15.076-5.313-17.534-14.622-37.068-26.894-57.522l-15.434 9.262c11.728 19.546 20.419 38.012 25.106 53.478 4.687 15.467 4.988 27.718 2.256 34.55-2.733 6.83-7.22 10.423-19.944 10.847-11.082.37-27.763-2.992-49.941-11.604C317.866 378.86 305.89 348.962 304 320c-16 32-32 32-48 32s-32 0-48-32c-1.89 28.962-13.866 58.859 34.24 75.902-22.178 8.612-38.86 11.973-49.941 11.604-12.724-.424-17.211-4.017-19.944-10.848-2.732-6.83-2.43-19.082 2.256-34.549 4.687-15.466 13.378-33.932 25.106-53.478l-15.434-9.262c-12.272 20.454-21.581 39.988-26.894 57.522-1.573 5.19-2.818 10.22-3.67 15.076-.169-.124-.327-.232-.502-.365-3.501-2.678-7.854-6.965-12.854-11.965-10-10-22.728-22.88-40.338-31.686-11.707-5.853-27.623-27.828-33.2-55.717-5.578-27.888-1.97-61.043 20.374-90.836l-14.398-10.796c-12.37 16.491-19.785 34.06-23.44 51.433-12.543 2.48-22.392 5.788-32.865 16.863 2.523-40.074 16.68-76.05 40.162-105.689a76.374 76.374 0 0 0 1.99 2.98c6.927 9.813 16.656 17.524 33.327 25.86l8.05-16.098c-15.329-7.664-21.6-12.953-26.673-20.14-2.308-3.27-4.42-7.235-6.791-12.07-5.39-28.9-9.796-56.582 18.36-87.438.367-.402.905-.607 1.6-.637 9.097-.394 45.217 28.95 79.051 35.594 19.651-6.115 40.847-10.22 63.332-12.094l4.448 15.568c-13.92 1.875-28.343 5.444-44.198 10.729l5.692 17.074c16.147-5.382 30.123-8.91 43.425-10.584l4.463 15.62c-6.012.517-11.858 1.388-17.295 2.667-9.38 2.207-17.681 5.276-23.802 11.397l12.726 12.726c1.88-1.879 7.578-4.81 15.198-6.603 5.387-1.268 11.681-2.114 18.226-2.506L256 144l8.213-28.746c6.545.392 12.839 1.238 18.226 2.506 7.62 1.793 13.319 4.724 15.198 6.603l12.726-12.726c-6.12-6.121-14.422-9.19-23.802-11.397-5.437-1.279-11.283-2.15-17.295-2.668l4.463-15.619c13.302 1.673 27.278 5.202 43.425 10.584l5.692-17.074c-15.855-5.285-30.278-8.854-44.198-10.729l4.448-15.568c22.485 1.873 43.68 5.98 63.332 12.094 33.834-6.643 69.954-35.988 79.05-35.594zm-92.82 109.979c-40 16-59.059 23.357-76.659 23.357-17.6 0-36.658-7.357-76.658-23.357l-6.684 16.71c40 16 60.942 24.643 83.342 24.643s43.342-8.643 83.342-24.643zm43.292 4.33c-14.39 28.78-43.976 43.976-75.976 59.976l7.588 15.172c-4.818 6.521-8.924 14.296-11.934 23.482 0 0-7.629 33.395-8.506 47.916l17.754 2.958C304 272 304 256 312.527 244.664c5.173 7.024 13.406 11.635 22.694 11.635 15.685 0 28.367-13.15 28.367-28.863 0-9.105-4.264-17.342-10.897-22.666 12.317-3.675 24.332-3.772 31.309-3.772v-17.996c-4.717 0-12.708-.032-22.129 1.363 12.116-9.681 22.675-21.335 30.178-36.34zm-239.902 0l-16.098 8.05c7.503 15.005 18.062 26.659 30.178 36.34-9.421-1.395-17.412-1.363-22.129-1.363v17.996c6.977 0 18.992.097 31.309 3.772-6.633 5.324-10.897 13.561-10.897 22.666 0 15.712 12.682 28.863 28.367 28.863 9.288 0 17.521-4.611 22.694-11.635C208 256 208 272 207.123 289.48l17.754-2.958c-.877-14.521-8.506-47.916-8.506-47.916-3.01-9.186-7.116-16.96-11.934-23.482l7.588-15.172c-32-16-61.586-31.196-75.976-59.976zm272.488 49.18l-17.074 5.69c3.336 10.009 2.55 18.53-.664 27.313-3.214 8.784-9.13 17.608-15.903 26.317-6.773 8.708-14.338 17.246-20.529 26.129-6.19 8.882-11.365 18.396-11.365 29.396h17.996c0-5 2.826-11.486 8.135-19.104 5.309-7.617 12.744-16.08 19.97-25.37 7.227-9.292 14.312-19.468 18.598-31.184 4.287-11.716 5.5-25.196.836-39.188zm-305.074 0c-4.664 13.991-3.45 27.47.836 39.187 4.286 11.716 11.37 21.892 18.597 31.183 7.227 9.292 14.662 17.754 19.971 25.371 5.31 7.618 8.135 14.104 8.135 19.104h17.996c0-11-5.174-20.514-11.365-29.396-6.191-8.883-13.756-17.42-20.53-26.13-6.773-8.708-12.688-17.532-15.902-26.316-3.213-8.784-4-17.304-.664-27.312zm231.758 27.413c5.708 0 10.369 4.638 10.369 10.868 0 6.229-4.66 10.865-10.37 10.865-5.708 0-10.368-4.636-10.368-10.865 0-6.23 4.66-10.868 10.369-10.868zm-158.442 0c5.709 0 10.37 4.638 10.37 10.868 0 6.229-4.661 10.865-10.37 10.865-5.708 0-10.369-4.636-10.369-10.865 0-6.23 4.66-10.868 10.37-10.868zm287.065 12.034C499.508 289.222 495.39 352.61 480 368c-9.787-15.381-20.124-27.816-32-32 9.426 36.059 0 64-16 80 0-16-3.432-23.686-16-32 3.293 39.931-18.232 56.793-32 64-6.028-11.65-17.48-24.433-33.275-35.494a31.768 31.768 0 0 0 5.63-9.164c1.46-3.648 2.367-7.5 2.829-11.526 3.896-1.288 7.36-3.491 10.533-5.918 4.999-3.822 9.646-8.535 14.646-13.535 10-10 21.272-21.12 35.662-28.314 20.293-10.147 36.377-36.172 42.8-68.283 2.935-14.677 3.599-30.76 1.019-47.164zm-415.688 0c-2.58 16.403-1.916 32.487 1.02 47.164 6.422 32.111 22.506 58.136 42.799 68.283 14.39 7.195 25.662 18.314 35.662 28.314 5 5 9.647 9.713 14.646 13.535 3.173 2.427 6.637 4.63 10.533 5.918.462 4.027 1.37 7.878 2.829 11.526a31.768 31.768 0 0 0 5.63 9.164C145.48 423.566 134.028 436.35 128 448c-13.768-7.207-35.293-24.069-32-64-12.568 8.314-16 16-16 32-16-16-25.426-43.941-16-80-11.876 4.184-22.213 16.619-32 32-15.39-15.39-19.508-78.778 16.156-139.398zM424.998 256h-17.996c0 11.5-10.11 26.464-21.834 40.143-5.862 6.839-11.89 13.345-16.754 19.56-4.864 6.215-9.412 11.798-9.412 20.297h17.996c0 .5 1.452-3.918 5.588-9.203 4.136-5.285 10.108-11.779 16.246-18.94 12.276-14.321 26.166-31.358 26.166-51.857zm-320 0H87.002c0 20.5 13.89 37.536 26.166 51.857 6.138 7.161 12.11 13.655 16.246 18.94 4.136 5.285 5.588 9.702 5.588 9.203h17.996c0-8.5-4.548-14.082-9.412-20.297-4.864-6.215-10.892-12.721-16.754-19.56-11.724-13.679-21.834-28.642-21.834-40.143zm201.725 168.805c4.823.6 9.34.83 13.576.69a53.604 53.604 0 0 0 5.383-.466c-2.526 8.899-6.629 17.366-12.768 24.733C301.151 463.877 282 472.998 256 472.998s-45.151-9.12-56.914-23.236c-6.14-7.367-10.242-15.834-12.768-24.733 1.752.236 3.54.404 5.383.465 4.236.141 8.753-.088 13.576-.69 1.86 4.965 4.373 9.518 7.637 13.434 8.237 9.885 21.086 16.764 43.086 16.764s34.849-6.88 43.086-16.764c3.264-3.916 5.776-8.47 7.637-13.433z"
        fill={foregroundColor}
        fillOpacity="1"
        stroke={stroke}
        strokeOpacity="1"
        strokeWidth="8"
      />
    </g>
  </svg>
);

export const Shark = ({
  foregroundColor = "#fff",
  backgroundColor = null,
  size = 200,
  stroke
}) => (
  <svg width={size} viewBox="0 0 512 512">
    <path d="M0 0h512v512H0z" fill={backgroundColor} fillOpacity="0" />
    <g transform="translate(0,0)">
      <path
        d="M243.5 52.06C203.4 97.42 156.6 131.5 99.8 161.6c11.9 6.1 25.1 9.4 37 11 9.3 1.2 17.8 1.3 23.9 1.1 3.1-.1 5.6-.2 7.3-.4.9-.1 1.6-.2 2-.2.4-.1 1.4-.5-.5.2l5.6 17c-2.1.8-1.9.5-2.6.6-.8.1-1.6.2-2.7.3-2.2.2-5 .4-8.5.5-2.5.1-5.2.1-8.2.1.4 1.7.6 3.4.6 5.3 0 14.2-12.9 24.5-27 24.5s-26.99-10.3-26.99-24.5c0-5.2 1.79-9.9 4.69-13.8-8.05-3-16.06-6.9-23.56-12.1-19.96 9.9-41.1 19.4-63.59 28.8v149.7c11.13 28.4 29.91 50.9 74.31 62.6l-4.6 17.4c-33.24-8.8-55.03-24.7-69.71-43.9V413c9.54 15.5 20.05 27.7 39.76 33.6l-5.1 17.2c-14.8-4.3-25.86-12-34.66-21.2v49.1H236.2c14.1-4.2 21.8-9.7 28.6-16.2 4.2-4 8-8.5 12.4-13.1-44.8-19.7-80.7-31.4-110.1-50.8-32.2-21.2-55.8-52.6-72.94-111.6l-1.3-4.5 2.9-3.6C133.8 244.1 221.1 201.8 287.5 170c-2.3-42.7-14.8-82.1-44-117.94zm-13.3 34.75l18 .68c-.6 17.11-5.3 36.21-23.9 52.01l-11.6-13.8c14.6-12.4 16.9-23.9 17.5-38.89zm267.6 21.69c-7.2 3.7-16.7 8.9-26.7 15.2-20.8 12.9-43.1 30.9-49.8 44.8-7.8 16.3-7.7 49-4.4 76.7 3.4 27.6 9 50.4 9 50.4l1.5 6.1-5.1 3.5c-25.4 17.5-41 35.4-58.1 51.6l-2.2 2-21.2 2.6c1.1 19.8-6.7 37-13 52.8l11.9 2.4c12.9-11.1 22.5-22.7 26.7-34.8l1.4-4 4-1.5c33-12.3 61.4-32.4 85.7-58.4 11-20.9 4.1-45.8 3-73.8l-.1-3.7 37.4-40.7v-91.2zm-371.1 82.1c-5.7 0-9 3.6-9 6.5s3.3 6.5 9 6.5 9-3.6 9-6.5-3.3-6.5-9-6.5zm155.1 3.6c-9.8 4.4-19.6 8.8-29.4 13.1-4.8 2.4-9.5 4.9-14.3 7.4l3.1.5c15.6 2.7 25.6 9.6 33.9 16.3 4.3-13.1 7.3-25.5 6.7-37.3zm114.6 15.7c-9.5 23.4-17.1 47-23 62l-1.4 3.6-3.6 1.4c-24.2 10-52 19-99.1 6.8-6.6 17.4-20.8 29.1-32.5 40.2l7.7 6.5c5.2-2.2 11-4.8 16.7-7.9 7.4-4 13.8-9.1 15.6-11.8l3.3-5.1 5.9 1.2c50 9.4 80.7 3 109.9-14.5 3.2-1.9 6.3-3.9 9.5-6.1-1.8-8.7-4.3-22-6.3-38.9-1.5-12-2.6-24.8-2.7-37.4zm-168.8 10.3c-11.5 6.2-23 12.5-34.1 19l2.1.5c15.2 3.6 25.7 9.7 34.2 16.1 1.3-3.4 2.6-6.7 3.4-9.6 1.6-6.4 1.9-11.3-1.5-18l-4.1-8zm-44.1 25c-11.2 6.8-21.8 13.7-31.6 20.6l6.7.9c10.8 1.3 18.8 6 24.4 11.2.7.7 1.2 1.4 1.9 2 1.9-9.9 2.2-19.7-.1-29.3l-1.3-5.4zm-35.8 23.7c-10.1 7.3-19.1 14.7-26.6 22.1 9.1 4 17.8 9 25.8 15.3 2.8-10 2.8-19.5 1.7-29.7l-.9-7.7zm37.2 90.2c-10.3 4.9-22.3 9.6-35.6 13.5 8.3 9.6 17.5 17.2 27.7 24 1.5 1 3 1.9 4.5 2.8l2-10.1c.8-4.4 1.9-13 1.9-21.1.1-3.2-.2-6.3-.5-9.1zm47.1 21c-11.3 8.3-23.3 15-36.9 19.5l-8.6 2.8c9.7 5.5 20.4 10.5 32.2 15.6l4.1-10.8c3.5-9.2 6.8-16.6 8.4-22.8.4-1.5.6-2.9.8-4.3zm41.4 20.7c-13.5 8.4-27.3 14.3-39.5 18.2l-7.4 2.4c9.7 4 20.2 8.3 31.3 12.9l3.6-8.7c3.6-8.5 9.2-15.8 12-24.8zm36.8 23.7c-14.4 6.8-29 11.9-39.1 13.5l-3.2.5c8 3.4 16.3 7 25.1 11 2.7-.2 4.5-1.1 6.5-2.8 2.4-2.1 4.8-5.8 6.8-10.6 1.5-3.5 2.7-7.5 3.9-11.6z"
        fill={foregroundColor}
        fillOpacity="1"
        stroke={stroke}
        strokeOpacity="1"
        strokeWidth="8"
      />
    </g>
  </svg>
);

export const Hound = ({
  foregroundColor = "#fff",
  backgroundColor = null,
  size = 200,
  stroke
}) => (
  <svg width={size} viewBox="0 0 512 512">
    <path d="M0 0h512v512H0z" fill={backgroundColor} fillOpacity="0" />
    <g transform="translate(0,0)">
      <path
        d="M137.75 17.28l-15.313 78.782 20.313 56.876h45.97L137.75 17.28zM74.5 19L20 378.156v116.156h208L210.125 386.5H113.28l-2.218-6.156-25.78-71.594 17.562-6.344 23.562 65.406h90.344l230.688-2.968 9.812-33.406H278.5V312.75h184.22l7.374-25.156L415.53 209.5H291.47l-20.345-37.594h-75.28l-.095-.28h-46.313L159.563 200l-17.593 6.28-26.532-74.25-.126.72L74.5 19zm133.375 178.22h56.094l21.405 38.874-26.094-.438-51.405-38.437zm230.47 12.28l38.53 55.094L493.03 209.5h-54.686zm-82.814 15.938c6.613 0 11.97 5.356 11.97 11.968 0 6.613-5.357 11.97-11.97 11.97-6.61 0-11.967-5.357-11.967-11.97 0-6.612 5.356-11.97 11.968-11.97zm44.595 0c6.612 0 12 5.356 12 11.968 0 6.613-5.388 11.97-12 11.97s-11.97-5.357-11.97-11.97c0-6.612 5.358-11.97 11.97-11.97zm-66.188 29.187c6.612 0 11.97 5.356 11.97 11.97 0 6.61-5.358 11.967-11.97 11.967-6.61 0-11.968-5.356-11.968-11.968 0-6.613 5.356-11.97 11.967-11.97zm43.125 0c6.612 0 12 5.356 12 11.97 0 6.61-5.388 11.967-12 11.967-6.61 0-11.968-5.356-11.968-11.968 0-6.613 5.357-11.97 11.97-11.97zm42.063 0c6.612 0 11.97 5.356 11.97 11.97 0 6.61-5.358 11.967-11.97 11.967-6.612 0-11.97-5.356-11.97-11.968 0-6.613 5.358-11.97 11.97-11.97z"
        fill={foregroundColor}
        fillOpacity="1"
        stroke={stroke}
        strokeOpacity="1"
        strokeWidth="8"
      />
    </g>
  </svg>
);

export const Owl = ({
  foregroundColor = "#fff",
  backgroundColor = null,
  size = 200,
  stroke
}) => (
  <svg width={size} viewBox="0 0 512 512">
    <path d="M0 0h512v512H0z" fill={backgroundColor} fillOpacity="0" />
    <g transform="translate(0,0)">
      <path
        d="M70.574 17.27l-4.87 18.044c24.228 6.543 46.02 15.573 65.478 26.704-21.276 15.76-35.307 42.705-35.307 73.314 0 13.593 2.77 26.463 7.707 37.955-21.82 20.365-35.004 49.398-35.004 87.504 0 70.68 42.857 131.724 104.85 161.005l-30.71 70.36h20.376l27.594-63.216c3.01 1.077 6.05 2.09 9.13 3.02 3.56 2.76 7.186 5.25 10.868 7.487l-13.03 52.71h19.28l10.945-44.32c6.856 2.546 13.842 4.224 20.9 5.007v39.312h18.69V452.8c7.872-.906 15.65-2.936 23.255-6.056l11.212 45.412h19.25l-13.44-54.418c3.4-2.222 6.75-4.66 10.036-7.343 3.22-1.07 6.398-2.226 9.537-3.456l28.46 65.216h20.376l-31.8-72.863c59.226-30.165 99.74-89.782 99.74-158.502 0-37.114-12.51-65.62-33.32-85.897 5.383-11.896 8.435-25.327 8.435-39.56 0-30.5-13.928-57.36-35.073-73.144 19.638-11.334 41.452-20.41 65.396-26.876l-4.87-18.043c-26.26 7.092-50.213 17.245-71.75 30-34.084-18.84-77.19-28.164-120.214-28.114-40.908.048-81.73 8.575-114.655 25.448-20.227-11.394-42.7-20.644-67.47-27.333zM252.707 38.67c36.446-.044 72.955 6.705 102.084 20.348-45.112 31.892-77.918 76.2-97.15 127.79C238.314 134.672 205 88.95 157.073 56.388c27.807-11.744 61.69-17.68 95.635-17.722zm-83.605 68.373c19.4 0 35.33 15.923 35.33 35.32 0 19.4-15.93 35.324-35.33 35.324S133.77 161.76 133.77 142.36c0-19.398 15.932-35.32 35.332-35.32zm179.44 0c19.4 0 35.33 15.923 35.33 35.32 0 19.4-15.93 35.324-35.33 35.324-19.402 0-35.333-15.923-35.333-35.323 0-19.398 15.93-35.32 35.33-35.32zm-110.378 80.69c4.052 10.347 7.523 21 10.424 31.913l9.03 33.964 9.03-33.964c2.895-10.888 6.368-21.472 10.405-31.72 14.39 21.47 37.346 35.386 63.236 35.386 14.44 0 27.964-4.346 39.608-11.896-4.003 70.85-18.94 124.726-39.34 161.416-23.964 43.104-54.35 62.274-83.537 61.836-29.184-.438-59.806-20.672-83.803-64.074-20.432-36.954-35.36-90.513-39.354-160.03C145.8 218.65 159.81 223.31 174.8 223.31c25.967 0 48.984-14 63.364-35.58zm-125.266 2.147c.433.61.864 1.22 1.31 1.816 2.165 81.335 18.39 144.056 42.653 187.942 3.655 6.61 7.513 12.784 11.538 18.55-48.72-28.262-81.132-79.294-81.132-137.394 0-32.026 9.226-54.484 25.632-70.913zm288.282 1.428c15.53 16.296 24.226 38.38 24.226 69.486 0 56.37-30.516 106.083-76.828 134.804 2.87-4.334 5.65-8.887 8.315-13.682 24.163-43.46 40.328-106.15 42.628-188.473.56-.707 1.122-1.41 1.66-2.135zm-237.496 59.052c-3.753 6.263-6.096 14.53-6.096 23.24 0 20.065 12.095 35.915 26.82 35.915 12.53 0 23.354-11.585 26.21-27.465-4.692 4.098-10.472 6.34-16.456 6.34-15.98 0-29.423-16.616-30.478-38.03zm185.912 2.477c-1.056 21.413-14.496 38.03-30.477 38.03-5.985 0-11.763-2.242-16.458-6.34 2.858 15.88 13.68 27.466 26.21 27.466 14.726 0 26.21-15.85 26.21-35.916 0-8.71-1.732-16.977-5.484-23.24h-.002zm-68.73 28.97c-3.51 13.094-14.307 23.18-24.53 23.18-9.984 0-20.61-10.057-23.943-22.507-.813 3.397-1.752 7.03-1.752 10.796 0 19.225 11.59 34.41 25.698 34.41s25.697-15.185 25.697-34.41c0-3.986-.26-7.9-1.168-11.47h-.002zm35.04 66.706c-3.435 16.552-14.208 29.013-27.45 29.013-8.24 0-15.752-4.6-21.024-12.146.738 18.326 12.065 33.062 25.697 33.062 14.107 0 25.696-15.862 25.696-35.086 0-5.407-1.303-10.277-2.92-14.844zm-115.636 1.347c-1.294 4.168-1.752 8.69-1.752 13.497 0 19.224 11.59 35.085 25.697 35.085 13.633 0 24.375-14.737 25.113-33.063-5.272 7.545-12.784 12.146-21.025 12.146-12.916 0-24.314-11.735-28.032-27.666z"
        fill={foregroundColor}
        fillOpacity="1"
        stroke={stroke}
        strokeOpacity="1"
        strokeWidth="8"
      />
    </g>
  </svg>
);

export const Cricket = ({
  foregroundColor = "#fff",
  backgroundColor = null,
  size = 200,
  stroke
}) => (
  <svg width={size} viewBox="0 0 512 512">
    <path d="M0 0h512v512H0z" fill={backgroundColor} fillOpacity="0" />
    <g transform="translate(0,0)">
      <path
        d="M261.635 85.86L247.09 96.466c21.23 29.114 69.244 55.739 112.074 79.193 4.964 2.718 9.83 5.363 14.594 7.955-9.767-3.123-19.881-6.35-30.317-9.775-26.672-8.755-54.46-18.512-77.57-29.09-23.109-10.578-41.403-22.446-48.861-32.674l-14.543 10.606c11.293 15.487 31.657 27.33 55.912 38.433 24.255 11.103 52.538 20.995 79.45 29.828 26.91 8.833 52.481 16.61 70.808 23.192 9.163 3.29 16.56 6.339 20.978 8.732 1.43.775 1.879 1.178 2.569 1.68-.44 2.39-1.41 6.243-4.782 11.303-6.575 9.761-18.197 14.277-29.384 15.49 4.176 1.229 6.886 8.01 6.88 17.219 9.784-1.672 17.722-5.09 24.008-9.342 7.844-4.62 13.311-10.662 16.674-16.664 4.461-9.639 9.002-23.26 3.248-31.955-1.703-2.47-3.74-4.467-6.115-6.506-4.751-4.078-10.966-8.21-18.477-12.776-15.022-9.133-35.145-19.788-56.427-31.443-42.565-23.31-89.902-51.696-106.174-74.012zm-114.397 24.762c-9.4 3.874-8.762 10.376-3.888 16.318 14.772 18.104 27.812 44.994 40.523 58.752a9926.19 9926.19 0 0 1 13.887 15.059c-2.567-4.963-4.868-9.385-7.864-15.219-10.224-19.909-19.95-47.74-29.648-65.207-3.197-4.244-7.41-9.635-13.01-9.703zm-30.687 20.363c-11.185 1.776-7.269 11.57-3.813 17.637 10.272 22.183 29.461 39.584 38.063 57.246 18.24 43.23 31.939 85.906 58.873 112.25a73.164 73.164 0 0 1 10.844-12.451c7.632-6.975 16.662-11.506 26.277-14.346-11.05-22.287-7.461-19.075-76.143-93.414-16.09-17.416-28.97-44.54-41.248-59.586-3.769-3.53-7.776-6.975-12.853-7.336zm-14.463 34.899L62.422 382.042l-39.764 10.867 3.229 11.045 49.888-13.002 35.383-211.057a350.858 350.858 0 0 1-9.07-14.011zm23.84 34.777l-3.473 20.711c2.635-.34 5.295-.672 7.97-1l3.016-8.492c-2.395-3.862-4.895-7.525-7.513-11.219zm152.787 11.065c-.23 7.585-1.024 14.207.398 19.38 2.012 7.321 6.792 14.234 28.57 20.516l5.694 1.643.742 5.877c1.323 10.48 3.45 21.298 7.139 31.388 6.038 2.343 9.859-.249 15.707-.43 2.519-.059 4.882.323 7.096 1.006-.11-1.585-.192-3.19-.227-4.816.92-25.278 8.112-43.763 27.992-56.736-26.79-12.354-65.704-17.266-93.111-17.828zm-18.477 15.777c-11.795.668-23.882 1.43-36.047 2.273 30.931 34.513 30.044 36.855 41.002 58.06 4.566-.45 9.15-.654 13.68-.648 4.433.006 8.808.205 13.066.522a126.809 126.809 0 0 0 8.332-4.608c-1.298-5.421-2.283-10.807-3.058-16.019-21.288-7.389-32.065-18.864-35.457-31.205-.789-2.87-1.252-5.67-1.518-8.375zm-116.218 9.389c-.565.063-1.146.12-1.71.185a1097.7 1097.7 0 0 0-22.97 2.877l-10.219 60.965c21.487 4.577 45.342 7.712 69.647 8.295-16.523-23.339-25.31-47.885-34.748-72.322zm243.205 4.591c-9.683 4.55-15.505 10.473-19.33 17.112-4.66 8.084-6.27 17.674-6.065 27.31.115 5.376.81 10.7 1.754 15.637 1.282 5.49 4.624 10.074 9.328 10.789 7.816 1.117 15.351-.584 21.184-5.463 5.832-4.88 10.597-13.285 11.35-27.947.136-2.67-.092-5.496-.589-8.352a52.415 52.415 0 0 1-.61 6.059c-2.11 13.112-8.581 22.975-14.454 22.03-5.872-.947-8.923-12.34-6.814-25.45 2.068-12.839 8.332-22.61 14.14-22.057-3.176-4.713-6.832-7.906-9.894-9.668zM68.59 248.712c-5.001 1.124-9.696 2.29-14.014 3.498-10.94 3.062-19.547 6.474-24.629 9.594-4.341 2.665-5.022 4.082-5.185 4.57.286.44.921 1.484 2.47 2.87 2.789 2.492 7.585 5.705 13.858 8.978 5.673 2.96 12.603 5.996 20.441 8.959l7.059-38.47zm362.127 25.453l-7.27 4.687c-.01.33-.01.66-.027.99a76.86 76.86 0 0 1-1.324 10.856l42.093 58.615 25.153-9.761-6.514-16.782-15.16 6.41-36.951-55.015zM282.99 305.712a154.67 154.67 0 0 0-3.642.004c-18.142.23-36.153 3.612-46.69 13.24-19.557 17.87-22.155 49.233-25.113 77.91l24.922 29.274 15.322-7.645-21.021-26.187.724-4.034c3.167-17.61 4.964-34.087 22.432-50.298l2.869-2.664 3.906.285c13.501.981 25.494 1.403 34.512-.506 8.927-1.89 14.718-5.24 19.404-13.361 1.65-3.378 1.663-5.31.98-7.598-.542-1.822-2.077-4.087-4.187-6.504-7.586-1.06-15.935-1.825-24.418-1.916zm54.399 2.385c-8.286 3.23-9.852 14.926-7.436 21.496 1.977 5.303 6.073 10.403 11.713 14.967 10.212 8.263 25.065 14.122 36.346 17.011l35.115-24.441 38.117 50.508 37.594-12.412-4.143-14.13-26.914 10.155-40.996-57.092-41.586 29.73-5.344-4.486c-11.343-9.523-19.438-22.073-25.904-27.765-3.233-2.846-5.26-3.572-6.562-3.541zm-231.25 10.605l-4.125 24.608c34.766.566 67.115-2.114 98.091-6.745a99.96 99.96 0 0 1 .782-1.986 100.748 100.748 0 0 1-4.526-4.303 173.342 173.342 0 0 1-2.836-2.968c-30.55.615-60.648-2.936-87.386-8.606zm-55.612 28.436L30.06 352.73l3.23 11.045 14.898-3.882 2.34-12.756zm209.116 6.607c-2.152 3.434-2.897 8.202-4.096 12.193l38.459 32.315 11.578-13.781-29.389-24.696 1.612-5.363c-5.934.075-12.007-.253-18.164-.668z"
        fill={foregroundColor}
        fillOpacity="1"
        stroke={stroke}
        strokeOpacity="1"
        strokeWidth="8"
      />
    </g>
  </svg>
);
