import React from 'react';
import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  EmailIcon,
} from 'react-share';

const SocialIcons = (props) => {
    return (
        <div className="social-wrap clearfix">
          <FacebookIcon size={32} round={true} />
          <TwitterIcon size={32} round={true} />
          <TelegramIcon size={32} round={true} />
          <WhatsappIcon size={32} round={true} />
          <GooglePlusIcon size={32} round={true} />
          <LinkedinIcon size={32} round={true} />
          <PinterestIcon size={32} round={true} />
          <VKIcon size={32} round={true} />
          <OKIcon size={32} round={true} />
          <RedditIcon size={32} round={true} />
          <TumblrIcon size={32} round={true} />
          <LivejournalIcon size={32} round={true} />
          <MailruIcon size={32} round={true} />
          <EmailIcon size={32} round={true} />
        </div>
    )
}

export default SocialIcons;
