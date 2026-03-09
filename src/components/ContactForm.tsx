import React, { useState } from 'react';
import Alert from './Alert';
import { useTranslations } from '../i18n/utils';
import type { Lang } from '../i18n/ui';

interface Props {
  lang: Lang;
}

type AlertStatus = 'idle' | 'success' | 'error';

export default function ContactForm({ lang }: Props) {
  const t = useTranslations(lang);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState(''); // honeypot
  const [nameErr, setNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [msgErr, setMsgErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [alertStatus, setAlertStatus] = useState<AlertStatus>('idle');

  function valName(v: string): boolean {
    if (!v || /^\s+$/.test(v)) {
      setNameErr(t('name_msg_error'));
      return false;
    }
    setNameErr('');
    return true;
  }

  function valEmail(v: string): boolean {
    if (!/\S+@\S+\.\S+/.test(v)) {
      setEmailErr(t('email_msg_error'));
      return false;
    }
    setEmailErr('');
    return true;
  }

  function valMessage(v: string): boolean {
    if (!v || v.length < 10 || /^\s+$/.test(v)) {
      setMsgErr(t('message_msg_error'));
      return false;
    }
    setMsgErr('');
    return true;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Honeypot check
    if (phone.length > 0) return;

    if (!valName(name) || !valEmail(email) || !valMessage(message)) return;

    setLoading(true);
    setAlertStatus('idle');

    try {
      const emailjs = await import('@emailjs/browser');
      const resp = await emailjs.default.send(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID ?? 'portfoliowebgmail',
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID ?? 'template_ZJJcGKJW',
        {
          from_name: name,
          from_email: email,
          to_name: 'Hanzel Godinez H.',
          message_html: `<p>${message}</p>`,
        },
        import.meta.env.PUBLIC_EMAILJS_USER_ID ?? 'user_sPXEf7VXMx4gXmotIkLQc'
      );

      if (resp.status === 200) {
        setName('');
        setEmail('');
        setMessage('');
        setAlertStatus('success');
      } else {
        setAlertStatus('error');
      }
    } catch {
      setAlertStatus('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center px-6 mt-12 pb-24">
      <div className="w-full xl:w-3/4 md:w-11/12 flex">
        {/* Contact info panel */}
        <div className="w-full h-auto pt-10 bg-blue-500 hidden md:block md:w-5/12 bg-cover rounded-l-lg">
          <h3 className="text-xl text-gray-100 font-bold text-center">{t('contact_info')}</h3>
          <img
            src="/imgs/avatar.jpg"
            className="rounded-full w-40 h-40 mt-12 ml-12"
            alt="Hanzel's Avatar"
          />
          <div className="flex items-center pt-10 ml-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
              <path
                className="heroicon-ui svgContact"
                d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
              />
            </svg>
            <p className="ml-3 mt-1 text-sm text-gray-200 font-light">{t('long_name')}</p>
          </div>
          <div className="flex items-center pt-5 ml-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
              <path
                className="heroicon-ui svgContact"
                d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z"
              />
            </svg>
            <a
              href="mailto:hanzelgodinez@gmail.com"
              className="ml-3 text-sm text-gray-200 font-light hover:text-gray-900 hover:underline"
            >
              hanzelgodinez@gmail.com
            </a>
          </div>
          <div className="flex items-center pt-5 ml-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
              <path
                className="heroicon-ui svgContact"
                d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
              />
            </svg>
            <p className="ml-3 text-sm text-gray-200 font-light">San José, Costa Rica</p>
          </div>
        </div>

        {/* Form panel */}
        <div className="w-full md:w-7/12 bg-gray-100 p-5 rounded-lg md:rounded-l-none">
          <h3 className="pt-4 font-light text-center">{t('tell_me')}</h3>
          <h3 className="font-light text-center">{t('write_me')}</h3>
          <form className="px-8 pt-6 pb-8 mb-4 bg-gray-100 rounded" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                {t('name_label')}
              </label>
              <input
                id="name"
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="name"
                type="text"
                placeholder={t('name_placeholder')}
                value={name}
                onChange={(e) => { setName(e.target.value); valName(e.target.value); }}
              />
              {nameErr && <p className="text-xs italic text-red-500 mt-2 ml-1">{nameErr}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                {t('email_label')}
              </label>
              <input
                id="email"
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="email"
                type="email"
                placeholder={t('email_placeholder')}
                value={email}
                onChange={(e) => { setEmail(e.target.value); valEmail(e.target.value); }}
              />
              {emailErr && <p className="text-xs italic text-red-500 mt-2 ml-1">{emailErr}</p>}
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="message">
                {t('message_label')}
              </label>
              <textarea
                id="message"
                className="w-full h-32 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="message"
                placeholder={t('message_placeholder')}
                value={message}
                onChange={(e) => { setMessage(e.target.value); valMessage(e.target.value); }}
              />
              {msgErr && <p className="text-xs italic text-red-500 mt-1 ml-1">{msgErr}</p>}
            </div>

            {/* Honeypot */}
            <label className="ohnohoney" htmlFor="phone" />
            <textarea
              className="ohnohoney"
              name="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <div className="mb-3 text-center">
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded disabled:opacity-50"
                type="submit"
                disabled={loading}
              >
                {loading ? '...' : t('send_label')}
              </button>
              {alertStatus === 'success' && (
                <div className="mt-4">
                  <Alert
                    failure={false}
                    message={t('message_success_alert')}
                    onClose={() => setAlertStatus('idle')}
                  />
                </div>
              )}
              {alertStatus === 'error' && (
                <div className="mt-4">
                  <Alert
                    failure={true}
                    message={t('message_error_alert')}
                    onClose={() => setAlertStatus('idle')}
                  />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
