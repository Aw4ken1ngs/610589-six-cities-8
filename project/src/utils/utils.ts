import dayjs from 'dayjs';
import { MAX_RATING } from '../const';


export const getRatingWidth = (rating: number): number => Math.round(rating) * 100 / MAX_RATING;

export const getFormatData = (date: string, format: string): string => dayjs(date).format(format);
