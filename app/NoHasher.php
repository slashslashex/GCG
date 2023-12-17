<?php

namespace App;

use Illuminate\Contracts\Hashing\Hasher;
use Illuminate\Hashing\AbstractHasher;
class NoHasher extends \Illuminate\Hashing\AbstractHasher
{
    public function make($value, array $options = []): string
    {
        return $value;
    }

    public function check($value, $hashedValue, array $options = [])
    {
        return $this->make($value) === $hashedValue;
    }

    public function needsRehash($hashedValue, array $options = []): bool
    {
        return false;
    }
}
