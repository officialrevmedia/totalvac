/**
 * Testimonials.
 *
 * The section is built and styled. It renders only when `approved` is true and
 * at least one entry exists, so nothing invented ever reaches the page.
 *
 * A published testimonial should be a real customer's words, used with their
 * written permission. In Canada, fabricated customer endorsements fall under
 * the Competition Act's rules on false or misleading representations, and a
 * competitor or a customer can complain about them. It is also the fastest way
 * for a new company to lose a large account that checks.
 *
 * To switch the section on:
 *   1. Collect three real quotes with permission to publish, including how the
 *      person wants to be credited.
 *   2. Add them to `testimonials` below.
 *   3. Set `approved` to true and rebuild. The section appears on the home page
 *      and the commitments block steps aside.
 *
 * Entry shape:
 *   {
 *     quote: 'What the customer actually said, lightly tidied for grammar only',
 *     name: 'How they want to be credited, for example J. Andrada',
 *     role: 'Their role, for example Facilities Manager',
 *     company: 'Their business, only with permission to name it',
 *     service: 'Which service the job was, for example Catch basin cleaning',
 *     permission: 'Where the written permission is filed'
 *   }
 */

export const approved = false;

export const testimonials = [];

/** Shown in place of testimonials until real ones are approved.
 *  These are commitments TotalVac makes, not claims about past work. */
export const commitments = [
  {
    title: 'You get a straight answer on acceptance',
    body: 'If the material, the access or the volume does not suit the equipment, you hear that before a service window is booked, not after a truck arrives.'
  },
  {
    title: 'You know the window and the scope',
    body: 'What is scheduled, what is needed from your side, and what the visit covers is confirmed in writing before the work goes ahead.'
  },
  {
    title: 'The site is left the way it should be',
    body: 'Access points are secured, the work zone is checked, and you are told when the job is done rather than finding out later.'
  }
];

export default { approved, testimonials, commitments };
