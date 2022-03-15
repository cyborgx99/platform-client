import React from 'react';

const PaypalButton = () => {
  return (
    <form
      target='paypal'
      action='https://www.paypal.com/cgi-bin/webscr'
      method='post'>
      <input type='hidden' name='cmd' value='_s-xclick' />
      <table>
        <tr>
          <td>
            <input type='hidden' name='on0' value='Choose lesson type' />
            Choose lesson type
          </td>
        </tr>
        <tr>
          <td>
            <select name='os0'>
              <option value='Lesson with non-native'>
                Lesson with non-native $10.00 USD
              </option>
              <option value='Lesson with native'>
                Lesson with native $15.00 USD
              </option>
              <option value='Native 90 minute'>
                Native 90 minute $20.00 USD
              </option>
            </select>{' '}
          </td>
        </tr>
      </table>
      <input
        type='hidden'
        name='encrypted'
        value='-----BEGIN PKCS7-----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-----END PKCS7-----'
      />
      <input
        type='image'
        src='https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif'
        name='submit'
        alt='PayPal - The safer, easier way to pay online!'
      />
      <img
        alt=''
        src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'
        width='1'
        height='1'
      />
    </form>
  );
};

export default PaypalButton;
