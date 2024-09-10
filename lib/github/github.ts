import { Octokit } from '@octokit/rest';
import { cache } from 'react'

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export const getLastUpdateTime = cache(async (): Promise<string> => {
  try {
    const { data } = await octokit.repos.getCommit({
      owner: 'leechan02',
      repo: 'MySite',
      ref: 'main', // or 'master', depending on your default branch
    });

    const commitDate = data.commit.author?.date || data.commit.committer?.date;
    
    if (!commitDate) {
      throw new Error('Commit date not found');
    }

    const lastUpdateTime = new Date(commitDate);

    const dateString = lastUpdateTime.toLocaleDateString('en-US', {
      timeZone: 'Asia/Seoul',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    
    const timeString = lastUpdateTime.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Seoul',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });

    return `${dateString}, ${timeString}`;
  } catch (error) {
    console.error('Error fetching last commit:', error);
    return 'Unknown';
  }
});