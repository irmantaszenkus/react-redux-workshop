import { reducer, push } from 'components/OfferList';

describe('reducer', () => {
    it('returns default state', () => {
        expect(reducer(undefined, {type: 'none'}))
            .toEqual([]);
    });
});
