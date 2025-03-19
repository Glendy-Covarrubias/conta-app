import { BENEFIT_DATA } from '../../utils/constants';

export default function handler(req, res) {
    res.status(200).json({
        data: BENEFIT_DATA
    });
}