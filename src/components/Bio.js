import React from 'react';
import avatar from '../assets/avatar.jpeg';
import { rhythm } from '../utils/typography';
import config from '../../config';

const { username, githubUrl } = config;

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        {avatar && (
          <img
            src={avatar}
            alt={username}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              width: rhythm(2),
              height: rhythm(2),
              borderRadius: '50%',
            }}
          />
        )}

        <p style={{ maxWidth: 310 }}>
          ssh 的个人博客，Github: <a href={githubUrl}>{username}</a> / 掘金：
          <a href="https://juejin.im/user/2330620350708823">ssh</a> / 知乎：
          <a href="https://www.zhihu.com/people/dan-shi-hao-43">ssh</a> /
          公众号：
          <a href="https://ssh-1300257814.cos.ap-shanghai.myqcloud.com/public_qrcode">
            前端从进阶到入院
          </a>
          / LeetCode：<a href="https://leetcode-cn.com/u/ssh-2/">ssh</a>
        </p>
      </div>
    );
  }
}

export default Bio;
