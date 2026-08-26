/**
 * Coverage map geometry.
 *
 * Every path here is projected from real latitude and longitude at a single
 * equal scale, so the shoreline shape, the river course, the highway runs and
 * the distances between municipalities are all true to the map rather than
 * drawn by eye. Generated once and committed, so the page needs no map service,
 * no API key and no third party request.
 *
 * Projection: equirectangular, 81 km per degree of longitude at this latitude,
 * 111 km per degree of latitude. Bounds run from 81.30 to 78.80 degrees west
 * and 42.80 to 43.86 degrees north.
 */

export const MAP_SIZE = { w: 720, h: 418 };
export const LAKE_ONTARIO = 'M720.0 0.0 C699.8 5.3 623.0 21.1 599.0 31.6 C575.0 42.1 584.6 53.9 576.0 63.1 C567.4 72.3 558.2 78.9 547.2 86.8 C536.2 94.7 519.4 102.0 509.8 110.5 C500.2 119.0 496.8 128.9 489.6 138.1 C482.4 147.3 473.3 156.6 466.6 165.8 C459.9 175.0 454.6 184.9 449.3 193.4 C444.0 201.9 440.2 211.2 434.9 217.1 C429.6 223.0 422.9 225.6 417.6 228.9 C412.3 232.2 400.8 233.5 403.2 236.8 C405.6 240.1 421.4 245.3 432.0 248.6 C442.6 251.9 453.2 253.9 466.6 256.5 C480.0 259.1 496.3 262.8 512.6 264.4 C528.9 266.0 537.1 266.4 564.5 266.4 C591.9 266.4 650.9 268.0 676.8 264.4 C702.7 260.8 712.8 248.0 720.0 244.7 L720 244.7 L720 0 Z';
export const LAKE_ERIE = 'M216.0 418.3 C226.1 416.3 255.9 409.1 276.5 406.5 C297.1 403.9 319.7 404.6 339.8 402.6 C359.9 400.6 377.2 397.3 397.4 394.7 C417.6 392.1 438.7 390.1 460.8 386.8 C482.9 383.5 509.7 379.5 529.9 374.9 C550.1 370.3 564.5 364.4 581.8 359.1 C599.1 353.9 615.4 348.0 633.6 343.4 C651.8 338.8 681.6 333.5 691.2 331.5 L720 418 L216.0 418 Z';
export const GRAND_RIVER = 'M267.8 55.3 C265.4 63.2 258.2 88.8 253.4 102.6 C248.6 116.4 240.4 127.6 239.0 138.1 C237.6 148.6 239.0 157.2 244.8 165.8 C250.6 174.4 267.4 180.2 273.6 189.4 C279.8 198.6 283.6 208.5 282.2 221.0 C280.8 233.5 262.6 253.2 265.0 264.4 C267.4 275.6 283.2 281.5 296.6 288.1 C310.0 294.7 330.2 299.3 345.6 303.9 C361.0 308.5 377.3 307.1 388.8 315.7 C400.3 324.2 398.9 344.7 414.7 355.2 C430.5 365.7 470.4 372.3 483.8 378.9 C497.2 385.5 493.5 392.1 495.4 394.7';
export const HIGHWAYS = [
  { id: 'H401', label: '401', major: true, x: 345.6, y: 165.8, d: 'M581.8 23.7 C569.8 30.3 530.0 51.3 509.8 63.1 C489.6 74.9 477.6 82.9 460.8 94.7 C444.0 106.5 428.2 122.3 409.0 134.2 C389.8 146.0 365.8 159.2 345.6 165.8 C325.4 172.4 310.1 172.4 288.0 173.7 C265.9 175.0 231.3 165.8 213.1 173.7 C194.9 181.6 190.1 205.9 178.6 221.0 C167.1 236.1 149.8 257.2 144.0 264.4' },
  { id: 'H403', label: '403', major: true, x: 357.1, y: 264.4, d: 'M417.6 225.0 C413.3 228.3 401.8 238.1 391.7 244.7 C381.6 251.3 371.5 257.8 357.1 264.4 C342.7 271.0 324.0 279.6 305.3 284.2 C286.6 288.8 265.9 293.4 244.8 292.1 C223.7 290.8 189.6 278.9 178.6 276.3' },
  { id: 'QEW', label: 'QEW', major: true, x: 423.4, y: 228.9, d: 'M547.2 78.9 C538.6 86.1 508.8 108.5 495.4 122.3 C482.0 136.1 475.2 149.3 466.6 161.8 C458.0 174.3 450.7 186.1 443.5 197.3 C436.3 208.5 421.5 220.4 423.4 228.9 C425.3 237.4 443.0 243.3 455.0 248.6 C467.0 253.9 477.6 257.5 495.4 260.5 C513.2 263.5 541.5 265.1 561.6 266.4 C581.8 267.7 607.2 268.1 616.3 268.4' },
  { id: 'H6', label: '6', major: false, x: 394.6, y: 272.3, d: 'M397.4 236.8 C396.9 242.7 396.5 259.8 394.6 272.3 C392.7 284.8 391.7 298.6 385.9 311.8 C380.1 325.0 364.3 344.7 360.0 351.3' },
  { id: 'H78', label: '7 and 8', major: false, x: 172.8, y: 181.5, d: 'M230.4 161.8 C220.8 165.1 190.1 176.2 172.8 181.5 C155.5 186.8 140.6 191.4 126.7 193.4 C112.8 195.4 95.5 193.4 89.3 193.4' },
  { id: 'H24', label: '24', major: false, x: 288.0, y: 232.9, d: 'M285.1 197.3 C285.6 203.2 286.6 221.1 288.0 232.9 C289.4 244.8 291.9 259.2 293.8 268.4 C295.7 277.6 298.6 284.8 299.5 288.1' },
];
export const CITIES = [
  { label: 'Stratford', x: 91.6, y: 193.4 },
  { label: 'Waterloo', x: 225.8, y: 155.5, primary: true },
  { label: 'Kitchener', x: 232.4, y: 161.4, primary: true },
  { label: 'Guelph', x: 303.0, y: 124.3 },
  { label: 'Cambridge', x: 284.8, y: 182.7 },
  { label: 'Brantford', x: 298.4, y: 284.6 },
  { label: 'Caledonia', x: 387.6, y: 313.4 },
  { label: 'Hamilton', x: 411.6, y: 238.4 },
  { label: 'Burlington', x: 432.3, y: 210.8 },
  { label: 'Oakville', x: 464.3, y: 154.7 },
  { label: 'Mississauga', x: 476.9, y: 107.0 },
  { label: 'Toronto', x: 552.1, y: 81.7, primary: true },
];

/** Label placement per city, tuned so nothing overlaps or leaves the frame. */
export const CITY_LABELS = {
  Stratford: { flip: false, dy: 4 },
  Waterloo: { flip: true, dy: -8 },
  Kitchener: { flip: true, dy: 12 },
  Guelph: { flip: false, dy: -2 },
  Cambridge: { flip: false, dy: 14 },
  Brantford: { flip: true, dy: 4 },
  Caledonia: { flip: false, dy: 4 },
  Hamilton: { flip: true, dy: 12 },
  Burlington: { flip: false, dy: -6 },
  Oakville: { flip: true, dy: 2 },
  Mississauga: { flip: true, dy: -4 },
  Toronto: { flip: false, dy: -6 }
};
